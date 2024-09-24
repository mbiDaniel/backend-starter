import { PartialType } from '@nestjs/mapped-types';

export class CreateNomenclatureDataDto {
  data: any
}

export class UpdateNomenclatureDataDto extends PartialType(CreateNomenclatureDataDto) {
  id: string
}
