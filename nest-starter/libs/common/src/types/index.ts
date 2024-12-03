import { ValidationError, ValidatorOptions } from "class-validator";

type NomenclatureColConfigType = {};
export type NomenclatureColType = {
  name: string;
  key: string;
  type: "str" | "num" | "float" | "bool" | "select";
  required: boolean;
  config: NomenclatureColConfigType;
};

export type ReturnType<T = any> = {
  data: T;
  message: "success" | "error" | any;
};

export interface ValidationPipeOptions extends ValidatorOptions {
  transform?: boolean;
  disableErrorMessages?: boolean;
  exceptionFactory?: (errors: ValidationError[]) => any;
}
