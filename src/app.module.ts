import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryRepository } from './country.repository';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([CountryRepository]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: Number(process.env.DATABASE_PORT) || 5432,
      username: process.env.DATABASE_USER ||'postgres',
      password: process.env.DATABASE_PASSSWORD ||'postgres',
      database: process.env.DATABASE_DATABASE ||'postgres',
      synchronize: Boolean(process.env.DATABASE_SINCRONIZE)|| true,
      entities: ["dist/**/*.entity{.ts,.js}"],
    }),
    ConfigModule.forRoot(),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
