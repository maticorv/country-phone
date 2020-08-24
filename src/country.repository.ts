import { Repository, EntityRepository } from "typeorm";
import { Country } from "./country.entity";


@EntityRepository(Country)
export class CountryRepository extends Repository<Country> {
    async getPhoneCodeByIso(iso: string): Promise<Country> {
        const query = this.createQueryBuilder('country');
        const country = await Country.findOne({iso})
        return country;
    }
    


}