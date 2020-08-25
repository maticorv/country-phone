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
    @Headers() headers: Headers,
    @Ip() ip,
    @Req() request: Request,
  ): Promise<CountryResponseDTO> {
    console.log('request :>> ', request);
    console.log('headers :>> ', headers);
    return this.appService.getPhoneCode(ip);
  }
}
