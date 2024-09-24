// import path from 'path';
import { Module } from '@nestjs/common';
// import { MailerModule } from '@nestjs-modules/mailer';
// import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

import { FilesModule } from './modules/files/files.module';
import { UsersModule } from './modules/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MAILDEV_INCOMING_PASS,
  MAILDEV_INCOMING_USER,
  MONGODB_URL,
} from '@app/config';
import { AuthModule } from './modules/auth/auth.module';
import { ProfileModule } from './modules/profile/profile.module';
import { NomenclatureModule } from './modules/nomenclature/nomenclature.module';
import { NomendataModule } from './modules/nomendata/nomendata.module';

@Module({
  imports: [
    // MailerModule.forRoot({
    //   transport: {
    //     host: 'localhost',
    //     port: 1025,
    //     ignoreTLS: true,
    //     secure: false,
    //     auth: {
    //       user: MAILDEV_INCOMING_USER,
    //       pass: MAILDEV_INCOMING_PASS,
    //     },
    //   },
    //   defaults: {
    //     from: '"No Reply" <noreply@quiki.com>',
    //   },
    //   template: {
    //     dir: path.join(process.env.PWD, 'templates/pages'),
    //     adapter: new HandlebarsAdapter(undefined, {
    //       inlineCssEnabled: true,
    //       inlineCssOptions: {},
    //     }),
    //     options: {
    //       strict: true,
    //     },
    //   },
    //   options: {
    //     partials: {
    //       dir: path.join(process.env.PWD, 'templates/partials'),
    //       options: {
    //         strict: true,
    //       },
    //     },
    //   },
    // }),
    MongooseModule.forRoot(MONGODB_URL),
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
