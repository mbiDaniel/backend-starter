import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import * as config from "@app/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ["verbose"] });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(config.PORT);
}
bootstrap();
