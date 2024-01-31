import { Injectable } from '@nestjs/common';
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
      insert(servicios: Interfaz) {
        this.servicio = [
          ...this.servicio,
          servicios
        ];
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
      
      


}
