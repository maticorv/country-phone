import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryRepository } from './country.repository';
var geoip = require('../node_modules/geoip-country');

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(CountryRepository)
    private countryRepository: CountryRepository
    ){

  }
  async getPhoneCode(ip): Promise<number> {
    if (ip.substr(0, 7) == "::ffff:" || ip.substr(0, 3) == "::1") {
      ip = ip.substr(7)
      const iso = geoip.lookup('191.82.126.180').country;

      const country = (await this.countryRepository.getPhoneCodeByIso(iso)).phonecode;
      return country;
    }
    const iso = geoip.lookup(ip).country;
    const country = (await this.countryRepository.getPhoneCodeByIso(iso)).phonecode;
    return country;
  }
}
