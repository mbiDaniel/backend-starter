import { PartialType } from '@nestjs/mapped-types';

export class CreateNomenclatureDto {
  code: string;
  name: string;
  accessKey: string;
  cols: []
}

export class UpdateNomenclatureDto extends PartialType(CreateNomenclatureDto) {
  id: string
}
