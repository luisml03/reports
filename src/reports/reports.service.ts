/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Clientes } from './entities/users.entity';
import { PrinterService } from 'src/printer/printer.service';
import { billReport } from './documents/bill.report';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReportsService {
  constructor(private readonly printer: PrinterService,
    @InjectRepository(Clientes) private clientesRepository: Repository<Clientes>
  ) {}

  async getBillReport(name: string): Promise<PDFKit.PDFDocument> {
    const client = await this.clientesRepository.find();
    const docDefinition = billReport(client, name);

    return this.printer.createPdf(docDefinition);
  }


  getClient(): Promise<Clientes[]> {
    return this.clientesRepository.find();
  }
}
