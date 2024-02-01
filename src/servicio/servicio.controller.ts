import { Controller, Get, HttpCode, Body, Post, Put, Delete, Param, NotFoundException,ParseIntPipe,HttpStatus} from '@nestjs/common';
import { ServicioService } from '../servicio/servicio.service';
import { Interfaz } from './interfaces/interfaz/interfaz.interface';
import { ServicioDto } from './dto/servicio.dto/servicio.dto';
@Controller('servicio')
export class ServicioController {

  constructor(private readonly servicioService: ServicioService) { }

  @Get()
  getAllProducts(): Interfaz[] {
    return this.servicioService.getAll();
  }

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number) {
    return this.servicioService.getId(id);
  }

  @Post()
@HttpCode(HttpStatus.NO_CONTENT)
createProduct(@Body() servicioDto: ServicioDto) {
  const id = this.servicioService.generateUniqueId();

  this.servicioService.insert({
    id,
    name: servicioDto.name,
    description: servicioDto.description,
   
  });
}
  @Put(':id')
async update(
  @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, 
  @Body() body,
) {
  return this.servicioService.update(id, body);
}

  @Delete(':id')
  @HttpCode(204)
  deleteProduct(@Param('id') id: number) {
    this.servicioService.delete(id);
  }

}
