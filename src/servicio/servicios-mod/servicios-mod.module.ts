import { Module } from '@nestjs/common';
import { ServicioController } from 'src/servicio/servicio.controller';
import { ServicioService } from 'src/servicio/servicio.service';

@Module({

    controllers: [ServicioController],
    providers: [ServicioService]
})


export class ServiciosModModule {
}
