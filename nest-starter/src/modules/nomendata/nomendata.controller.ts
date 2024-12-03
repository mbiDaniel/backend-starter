import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { NomendataService } from './nomendata.service';
import {
  CreateNomenclatureDataDto,
  UpdateNomenclatureDataDto,
  accessKeyName,
} from '@app/common';
import { NomenclatureService } from '../nomenclature/nomenclature.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Nomenclature Data')
@Controller('nomen/:code/data')
export class NomendataController {
  constructor(
    private readonly nomendataService: NomendataService,
    private readonly nomenclatureService: NomenclatureService,
  ) {}

  @Post()
  async create(
    @Body() createNomendatumDto: CreateNomenclatureDataDto,
    @Param('code') code: string,
  ) {
    const nomen = await this.nomenclatureService.getNomenByCode(code);
    const accessKey = createNomendatumDto.data[accessKeyName];
    delete createNomendatumDto.data[accessKeyName];
    return this.nomendataService.create({
      nomen: nomen.data._id,
      data: createNomendatumDto.data,
      [accessKeyName]: accessKey,
    });
  }

  @Get()
  async findAll(@Param('code') code: string) {
    const nomen = await this.nomenclatureService.getNomenByCode(code);
    return this.nomendataService.find({ nomen: nomen.data._id }, {}, true);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateNomendatumDto: UpdateNomenclatureDataDto,
  ) {
    return this.nomendataService.update({ _id: id }, updateNomendatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nomendataService.delete({ _id: id });
  }
}
