import { Controller, Get, HttpCode, Body, Post, Put, Delete, Param, NotFoundException,ParseIntPipe,HttpStatus} from '@nestjs/common';
import { ServicioService } from '../servicio/servicio.service';
import { Interfaz } from './interfaces/interfaz/interfaz.interface';
import { ServicioDto } from './dto/servicio.dto/servicio.dto';
@Controller('servicio')
export class ServicioController {

  constructor(private readonly servicioService: ServicioService) { }

  @Get()
async getAllProducts() {
  return await this.servicioService.getAll();
}

@Get(':id')
async find(@Param('id', ParseIntPipe) id: number) {
  return await this.servicioService.getId(id);
}


@Post()
@HttpCode(HttpStatus.CREATED) 
async createProduct(@Body() servicioDto: ServicioDto) {
  await this.servicioService.insert(servicioDto);
}



@Put(':id')
async update(
  @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, 
  @Body() body: ServicioDto,
) {
  return await this.servicioService.update(id, body);
}


@Delete(':id')
@HttpCode(HttpStatus.NO_CONTENT)
async deleteProduct(@Param('id') id: number) {
  await this.servicioService.delete(id);
}




}
