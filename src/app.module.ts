import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProbandoController } from './probando/probando.controller';
import { UsersController } from './controllers/users/users.controller';
import { ServicioService } from './servicio/servicio.service';
import { ServicioController } from './servicio/servicio.controller';
import { ServiciosModModule } from './servicio/servicios-mod/servicios-mod.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicioTabla } from './servicio/servicio.entity';

@Module({
  imports: [ ServiciosModModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    password: '',
    username: 'root',
    database: 'nestjs',
    entities: [ServicioTabla],
    synchronize: true,
})],
  controllers: [AppController, ProbandoController, UsersController, ServicioController],
  providers: [AppService,  ServicioService],
})
export class AppModule {}
