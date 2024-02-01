import { IsString, Length } from 'class-validator';

export class UsuarioDto {
  @IsString()
  @Length(1, 50)
  name: string;

  @IsString()
  @Length(1, 50)
  contrasena: string;

  @IsString()
  @Length(1, 50)
  correo: string;
}
