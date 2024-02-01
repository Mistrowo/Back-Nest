import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioTabla } from './usuario.entity'; 
import { UsuarioDto } from './dto/usuario.dto'

@Injectable()
export class UsuarioServicioService {
  constructor(
    @InjectRepository(UsuarioTabla)
    private readonly usuarioRepository: Repository<UsuarioTabla>,
  ) {}

  async create(usuarioDto: UsuarioDto): Promise<UsuarioTabla> {
    const usuario = this.usuarioRepository.create(usuarioDto);
    return this.usuarioRepository.save(usuario);
  }

  async findAll(): Promise<UsuarioTabla[]> {
    return this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<UsuarioTabla> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id }
    });
    if (!usuario) {
      throw new NotFoundException(`Usuario con el ID "${id}" no encontrado.`);
    }
    return usuario;
  }
  

  async update(id: number, usuarioDto: UsuarioDto): Promise<UsuarioTabla> {
    const usuario = await this.usuarioRepository.preload({
      id: id,
      ...usuarioDto,
    });
    if (!usuario) {
      throw new NotFoundException(`Usuario con el ID "${id}" no encontrado.`);
    }
    return this.usuarioRepository.save(usuario);
  }

  async remove(id: number): Promise<void> {
    const usuario = await this.findOne(id); // Reutiliza findOne para verificar si existe
    await this.usuarioRepository.remove(usuario);
  }
}
