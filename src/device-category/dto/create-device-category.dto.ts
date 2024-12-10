import { IsNotEmpty, IsString } from "class-validator";

export class CreateDeviceCategoryDto {

    @IsString()
    @IsNotEmpty()
    categoryName: string;
  }
  

  