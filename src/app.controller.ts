import { Controller, Get, Ip, Req, Headers} from '@nestjs/common';
import { AppService } from './app.service';
import { Country } from './country.entity';
import { CountryResponseDTO } from './country-response.dto';
import { Request } from 'express';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPhoneCode(
    @Headers('x-forwarded-for') ip: string,
    @Req() request: Request,
  ): Promise<CountryResponseDTO> {
    return this.appService.getPhoneCode(ip);
  }
}
