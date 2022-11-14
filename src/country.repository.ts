import { Repository, EntityRepository } from "typeorm";
import { Country } from "./country.entity";


@EntityRepository(Country)
export class CountryRepository extends Repository<Country> {
    async getPhoneCodeByIso(iso: string): Promise<Country> {
        // const query = this.createQueryBuilder('country');
        const country = {
            id: 1,
            iso:'string',
            nicename:'string',
            name:'string',
            iso3:'string',
            numcode:1,
            phonecode:1,
        }
        return null;
    }
    


}