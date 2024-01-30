import { Controller,Get,Param } from '@nestjs/common';

@Controller('probando')
export class ProbandoController {
    @Get('ola')
    getHelloInProducts(): string {
      return "Probando en carpeta probando";   
}

@Get(':id/:size')
findWithSize(@Param('id') id: number, @Param('size') size: string ) {
  return `Página de detalle de producto ${id}, en tamaño ${size}`;
}


}
