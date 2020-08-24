import { BaseEntity, Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Country extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    iso:string;

    @Column()
    name:string;

    @Column()
    nicename:string;

    @Column({ nullable: true })
    iso3:string;
    
    @Column({ nullable: true })
    numcode:number;

    @Column()
    phonecode:number;


}