import * as path from "path";
import { Module } from "@nestjs/common";
import { MailerModule } from "@nestjs-modules/mailer";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";

import { FilesModule } from "./modules/files/files.module";
import { UsersModule } from "./modules/users/users.module";
import { MongooseModule } from "@nestjs/mongoose";
import * as config from "@app/config";
import { AuthModule } from "./modules/auth/auth.module";
import { ProfileModule } from "./modules/profile/profile.module";
import { NomenclatureModule } from "./modules/nomenclature/nomenclature.module";
import { NomendataModule } from "./modules/nomendata/nomendata.module";

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: config.SMTP_HOST,
        port: config.SMTP_PORT,
        auth: {
          user: config.SMTP_USER,
          pass: config.SMTP_PASS,
        },
      },
      defaults: {
        from: config.MAIL_FROM_USER,
      },
      template: {
        dir: path.join(process.env.PWD, "src", "templates"),
        adapter: new HandlebarsAdapter(undefined, {
          inlineCssEnabled: true,
          inlineCssOptions: {},
        }),
        options: {
          strict: true,
        },
      },
      options: {
        partials: {
          dir: path.join(process.env.PWD, "src", "templates", "partials"),
          options: {
            strict: true,
          },
        },
      },
    }),
    MongooseModule.forRoot(config.MONGODB_URL),
    AuthModule,
    FilesModule,
    UsersModule,
    ProfileModule,
    NomenclatureModule,
    NomendataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
