import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDeviceDto {

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    categoryId: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    deviceName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    referenceNumber: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    measureIds: number[]; // Liste des IDs de mesures
  }
  