import { Injectable, NotFoundException } from '@nestjs/common';
import { Interfaz } from './interfaces/interfaz/interfaz.interface';

@Injectable()
export class ServicioService {

  private servicio: Interfaz[] = [
    {
      id: 1,
      name: 'Servicio Prueba',
      description: 'Probando weas'
    },
    {
      id: 2,
      name: 'Servicio temrinar bg3',
      description: 'Matar al cerebro gigante'
    },
    {
      id: 3,
      name: 'Servicio Irme a casa',
      description: 'Me quiero ir a la casa'
    }
  ];

  getAll(): Interfaz[] {
    return this.servicio;
  }

  insert(servicio: Interfaz) {
    this.servicio = [...this.servicio, servicio];
  }

  update(id: number, productData: Interfaz): Interfaz {
    let product = this.servicio.find(p => p.id === id);
    if (product) {
      product = { ...product, ...productData };
    }
    return product;
  }

  delete(id: number) {
    this.servicio = this.servicio.filter(p => p.id !== id);
  }

  getId(id: number): Interfaz {
    const product = this.servicio.find(item => item.id == id);
    if (product) {
      return product;
    } else {
      throw new NotFoundException(`No encontramos el producto ${id}`);
    }
  }

  // Método para generar un ID único
  generateUniqueId(): number {
    const maxId = this.servicio.reduce((acc, cur) => cur.id > acc ? cur.id : acc, 0);
    return maxId + 1;
  }
}
