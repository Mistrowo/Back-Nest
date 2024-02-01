import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioServicioService } from './usuarioservicio.service'; // Ajusta la ruta según corresponda
import { UsuarioDto } from './dto/usuario.dto'; 

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioServicioService) {}

  @Post()
  create(@Body() usuarioDto: UsuarioDto) {
    return this.usuarioService.create(usuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usuarioService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() usuarioDto: UsuarioDto) {
    return this.usuarioService.update(id, usuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usuarioService.remove(id);
  }
}
