import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { PrinterModule } from 'src/printer/printer.module';
import { Clientes } from './entities/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ReportsController],
  providers: [ReportsService],
  imports: [TypeOrmModule.forFeature([Clientes]), PrinterModule],
})
export class ReportsModule {}
