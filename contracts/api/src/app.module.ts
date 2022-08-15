import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { FakeTrucksController } from "./contracts/fake/trucks.controller";

@Module({
  imports: [],
  controllers: [AppController, FakeTrucksController],
  providers: [],
})
export class AppModule {}
