

import { IsInt, IsString,Min } from "class-validator";

export class ServicioDto {
  @IsString({
    message: "El campo nombre debe de ser un String"
  })
  name: string;

  @IsString()
  description: string;

  @IsInt({ message: 'El stock debe de ser un número entero' })
  @Min(0, { message: 'El stock debe ser 0 o más'})
  stock: number;
}
