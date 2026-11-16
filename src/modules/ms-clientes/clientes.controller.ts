import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller('clientes')
export class ClientesController {
  private readonly clientesServiceUrl = 'http://localhost:3001/clientes'; 

  constructor(private readonly httpService: HttpService) {}

  @Get()
  async findAll() {
    const { data } = await firstValueFrom(
      this.httpService.get(this.clientesServiceUrl),
    );
    return data;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.clientesServiceUrl}/${id}`),
    );
    return data;
  }

  @Post()
  async create(@Body() createClienteDto: any) {
    const { data } = await firstValueFrom(
      this.httpService.post(this.clientesServiceUrl, createClienteDto),
    );
    return data;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateClienteDto: any) {
    const { data } = await firstValueFrom(
      this.httpService.patch(`${this.clientesServiceUrl}/${id}`, updateClienteDto),
    );
    return data;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const { data } = await firstValueFrom(
      this.httpService.delete(`${this.clientesServiceUrl}/${id}`),
    );
    return data;
  }
}