import { IsString, IsInt, Length, Min } from 'class-validator';

export class ServicioDto {
  @IsString()
  @Length(1, 50)
  name: string;

  @IsString()
  @Length(1, 50)
  description: string;

  @IsInt()
  @Min(0)
  stock: number;
}
