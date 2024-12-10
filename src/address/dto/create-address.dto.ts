import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAddressDto {
  
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    latitude: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    longitude: number;


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    city: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    country: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    province: string;
  }
  