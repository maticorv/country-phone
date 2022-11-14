import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryRepository } from './country.repository';
import { Country } from './country.entity';
import { CountryResponseDTO } from './country-response.dto';
import { Repository } from 'typeorm';
// import { geoip } from 'geoip-country';

const geoip = require('../node_modules/geoip-country');

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Country)
    private country: Repository<Country>,
    ){

  }
  async getPhoneCode(ip: string): Promise<CountryResponseDTO> {
    if (!ip) {
      ip = '190.3.65.38'
    }
    const iso = geoip.lookup(ip).country;
    const country = (await this.country.findOneBy({iso: iso}));
    return {
      'id': country.id,
      'iso': country.iso,
      'iso3': country.iso3,
      'name': country.name,
      'nicename': country.nicename,
      'numcode': country.numcode,
      'phonecode': country.phonecode,
      'ip': ip,
    };
  }
}
