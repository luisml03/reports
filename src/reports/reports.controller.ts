import { Controller, Get, Res, Query } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { Response } from 'express';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('bill')
  async getBillReport(@Res() response: Response, @Query('user') user: string) {
    const pdfDoc = await this.reportsService.getBillReport(user);

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Listado Usuarios';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('Clientes')
  async getClients() {
    return this.reportsService.getClient();
  }
}
