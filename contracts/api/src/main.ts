import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // allow app to be called from everywhere
  app.enableCors();
  // you can disable etags so that you always get 200's instead of 304s :)
  // app.getHttpAdapter().getInstance().set("etag", false);
  await app.listen(9600);
}
bootstrap();
