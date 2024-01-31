import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProbandoController } from './probando/probando.controller';
import { UsersController } from './controllers/users/users.controller';
import { ServicioService } from './servicio/servicio.service';
import { ServicioController } from './servicio/servicio.controller';

@Module({
  imports: [],
  controllers: [AppController, ProbandoController, UsersController, ServicioController],
  providers: [AppService,  ServicioService],
})
export class AppModule {}
