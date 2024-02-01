import { Module } from '@nestjs/common';
import { ServicioController } from 'src/servicio/servicio.controller';
import { ServicioService } from 'src/servicio/servicio.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicioTabla } from '../servicio.entity';

@Module({


    imports: [TypeOrmModule.forFeature([ServicioTabla])],

    controllers: [ServicioController],
    providers: [ServicioService],
    exports: [TypeOrmModule]
})


export class ServiciosModModule {
}
