import { Controller,Get} from '@nestjs/common';

@Controller('probando')
export class UsersController {
    @Get()
    getHelloInProducts(): string {
      return "Probando Usuarios";
}
}
