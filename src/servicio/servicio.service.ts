import { Injectable, NotFoundException } from '@nestjs/common';
import { Interfaz } from './interfaces/interfaz/interfaz.interface';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { ServicioTabla } from './servicio.entity';
import { ServicioDto } from './dto/servicio.dto/servicio.dto';

@Injectable()
export class ServicioService {


  constructor(
    @InjectRepository(ServicioTabla)
    private servicioRepository: Repository<ServicioTabla>,
  ) {}

 
  getAll() {
    return this.servicioRepository.find();
}

async insert(body: ServicioDto) {
  const product = this.servicioRepository.create(body);
  await this.servicioRepository.save(product);
  return product;
  
}


async update(id: number, body: any) {
  const userProduct = {
    id,
    ...body,
  }
  const product = await this.servicioRepository.preload(userProduct);
  if(product) {
    return this.servicioRepository.save(product);
  }
  throw new NotFoundException(`No se encuentra el producto ${id}`);
}

async delete(id: number) {
  const product = await this.servicioRepository.findOne({ where: { id } });
  if (product) {
    return this.servicioRepository.remove(product);
  }
  throw new NotFoundException(`No se encuentra el producto ${id}`);
}

getId(id: number): Promise<ServicioTabla> {
    return this.servicioRepository.findOne({ where: { id } });
}


  




}
