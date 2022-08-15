import { Controller, Get } from "@nestjs/common";
import { API_CONSTANTS } from "./../../api.constants";

@Controller(`${API_CONSTANTS.fake}/trucks`)
export class FakeTrucksController {
  @Get()
  get() {
    return [
      {
        id: "de5ddb70-b2a7-4309-a992-62260a09683a",
        licensePlate: "xx-yy-zz",
        color: "black",
      },
      {
        id: "087e0b0b-1c13-46e3-8920-762f5738072e",
        licensePlate: "xx-yy-zz",
        color: "red",
      },
    ];
  }
}
