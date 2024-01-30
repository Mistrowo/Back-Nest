import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProbandoController } from './probando/probando.controller';
import { UsersController } from './controllers/users/users.controller';

@Module({
  imports: [],
  controllers: [AppController, ProbandoController, UsersController],
  providers: [AppService],
})
export class AppModule {}
