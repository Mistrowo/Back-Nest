import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProbandoController } from './probando/probando.controller';
import { UsersController } from './controllers/users/users.controller';
import { ServicioService } from './servicio/servicio.service';
import { ServicioController } from './servicio/servicio.controller';
import { ServiciosModModule } from './servicios-mod/servicios-mod.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [ ServiciosModModule, TagsModule],
  controllers: [AppController, ProbandoController, UsersController, ServicioController],
  providers: [AppService,  ServicioService],
})
export class AppModule {}
