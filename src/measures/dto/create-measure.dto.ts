import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsObject, IsOptional } from "class-validator";
import { CreateAddressDto } from "src/address/dto/create-address.dto";

export class CreateMeasureDto {
   
  @ApiProperty()
  @IsOptional()
  @IsObject()
  address: CreateAddressDto;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  deviceId :number;

  }
  