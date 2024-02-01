import { UsuarioServicioService } from './usuarios/usuarioservicio.service';
import { UsuarioController } from './usuarios/usuario.controller';
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
import { UsuarioTabla } from './usuarios/usuario.entity';
import { UsuariosModule } from './usuarios/usuarios.module';


@Module({
  imports: [ServiciosModModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    password: '',
    username: 'root',
    database: 'nestjs',
    entities: [ServicioTabla, UsuarioTabla],
    synchronize: true,
  }), UsuariosModule],
  controllers: [
    UsuarioController, AppController, ProbandoController, UsersController, ServicioController],
  providers: [
    UsuarioServicioService, AppService, ServicioService],
})
export class AppModule { }
