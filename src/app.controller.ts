import { Controller, Get, Ip } from '@nestjs/common';
import { AppService } from './app.service';
import { Country } from './country.entity';
import { CountryResponseDTO } from './country-response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPhoneCode(
    @Ip() ip
  ): Promise<CountryResponseDTO> {
    return this.appService.getPhoneCode(ip);
  }
}
