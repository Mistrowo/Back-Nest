import { Controller,Get,HttpCode,Body,Post,Put,Delete,Param} from '@nestjs/common';
import { ServicioService } from '../servicio/servicio.service';
import { Interfaz } from './interfaces/interfaz/interfaz.interface';


@Controller('servicio')
export class ServicioController {

    
  constructor(private readonly servicioService: ServicioService) { }

  @Get()
getAllProducts(): Interfaz[] {
  return this.servicioService.getAll();
}

  @Post()
  @HttpCode(204)
  createProduct(
    @Body('name') name: string,
    @Body('description') description: string
  ) {
    this.servicioService.insert({
      id: this.servicioService.getAll().length,
      name,
      description
    });
  }


      @Put(':id')
    updateProduct(
      @Param('id') id: number, 
      @Body() productData: Interfaz
    ): Interfaz {
      return this.servicioService.update(id, productData);
    }

    @Delete(':id')
    @HttpCode(204)
    deleteProduct(@Param('id') id: number) {
      this.servicioService.delete(id);
    }

  
}
