import { Controller, Get, Ip } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPhoneCode(
    @Ip() ip
  ): Promise<number> {
    return this.appService.getPhoneCode(ip);
  }
}
