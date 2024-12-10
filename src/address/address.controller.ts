import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { ApiTags } from '@nestjs/swagger';
import { Address } from './entities/address.entity';


@ApiTags("addresses")
@Controller('addresses')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  
  @Post()
  createAddress(@Body() createAddressDto: CreateAddressDto) {
    return this.addressService.create(createAddressDto);
  }


  @Get()
  async GetAddresses():Promise<Address[]> {
    return await this.addressService.findAll();
  }

  @Get(':id')
  async GetMyAddress(@Param('id') AddressID: number) {
    return await this.addressService.findOne(AddressID);
  }



  @Patch(':id')
  updateAddress(@Param('id') AddressID: number, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressService.update(AddressID, updateAddressDto);
  }



  @Delete(':id')
  removeAddress(@Param('id') AddressID: number) {
    return this.addressService.remove(AddressID);
  }
}
