/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ReportsModule } from './reports/reports.module';
import { PrinterModule } from './printer/printer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clientes } from './reports/entities/users.entity';

@Module({
  imports: [ReportsModule, PrinterModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'luis',
      password: 'luis123',
      database: 'db1',
     entities: [Clientes],
      synchronize: false,
      //logging: true,
    }),

  ],
})
export class AppModule {}
