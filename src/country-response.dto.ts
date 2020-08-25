import { IsNotEmpty, IsOptional, IsString, IsNumber} from "class-validator";

export class CountryResponseDTO {

    @IsNumber()
    id: number;

    @IsString()	
    @IsNotEmpty()
    iso:string;

    @IsString()	
    @IsNotEmpty()
    name:string;

    @IsString()	
    @IsNotEmpty()
    nicename:string;

    @IsString()	
    @IsNotEmpty()
    iso3:string;
    
    @IsNumber()
    @IsNotEmpty()
    numcode:number;

    @IsNumber()
    @IsNotEmpty()
    phonecode:number;

    @IsString()	
    @IsNotEmpty()
    ip: string;

}