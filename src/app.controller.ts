import { Controller, Get, Ip } from '@nestjs/common';
import { AppService } from './app.service';
import { Country } from './country.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPhoneCode(
    @Ip() ip
  ): Promise<Country> {
    return this.appService.getPhoneCode(ip);
  }
}
