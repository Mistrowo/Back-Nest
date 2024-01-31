import { Controller,Get,Param,Post,Body,Res,HttpStatus,Put,Delete,HttpCode,Query } from '@nestjs/common';
import { ServicioService } from '../servicio/servicio.service';


@Controller('probando')
export class ProbandoController {
    @Get('ola')
    getHelloInProducts(): string {
      return "Probando en carpeta probando";   
}


@Get(':id')
find(@Res() response, @Param('id') id: number) {
  if(id < 100) {
    return response.status(HttpStatus.OK).send(`Página del producto ${id}`);
  } else {
    return response.status(HttpStatus.NOT_FOUND).send(`Producto inexistente`);
  }
}

@Get(':id/:size')
findWithSize(@Param('id') id: number, @Param('size') size: string ) {
  return `Página de detalle de producto ${id}, en tamaño ${size}`;

}

@Post()
createProduct(
  @Body('name') name: string, 
  @Body('description') description: string
) {
  return `Probando weas con el usuario ${name} con el saludo ${description}.`;
}



@Put(':id')
update(@Param('id') id: number, @Body() body) {
  return `Estás actualizando el  ${id} 
          con ${body.name} y ${body.description}`;
}


@Delete(':id')
@HttpCode(HttpStatus.NO_CONTENT)
delete(@Param('id') id: number) {
  return `Hemos borrado el producto ${id}`;
}


@Get('query')
rutaQuery(@Query() query) {
    return query;
}



}
