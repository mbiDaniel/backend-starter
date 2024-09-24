import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NomenclatureService } from './nomenclature.service';
import { CreateNomenclatureDto, UpdateNomenclatureDto } from '@app/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Nomenclature')
@Controller('nomen')
export class NomenclatureController {
  constructor(private readonly nomenclatureService: NomenclatureService) {}

  @Post()
  create(@Body() createNomenclatureDto: CreateNomenclatureDto) {
    return this.nomenclatureService.create(createNomenclatureDto);
  }

  @Get()
  findAll() {
    return this.nomenclatureService.find();
  }

  @Get(':code')
  getNomenByCode(@Param('code') code) {
    return this.nomenclatureService.getNomenByCode(code);
  }

  @Put(':id')
  update(
    @Body() updateNomenclatureDto: UpdateNomenclatureDto,
    @Param('id') id: string,
  ) {
    return this.nomenclatureService.update({ _id: id }, updateNomenclatureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nomenclatureService.delete({ _id: id });
  }
}
