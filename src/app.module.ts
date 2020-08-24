import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryRepository } from './country.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CountryRepository]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      synchronize: true,
      entities: ["dist/**/*.entity{.ts,.js}"],
    }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
