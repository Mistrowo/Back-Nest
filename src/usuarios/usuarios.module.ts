import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioServicioService } from './usuarioservicio.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioTabla } from './usuario.entity';

@Module({


    imports: [TypeOrmModule.forFeature([UsuarioTabla])],

    controllers: [UsuarioController],
    providers: [UsuarioServicioService],
    exports: [TypeOrmModule]
})
export class UsuariosModule {}
