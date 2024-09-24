import { ReturnType } from '../types';
import { SetMetadata } from '@nestjs/common';
export async function returnSuccess<T = any>(
  data?: Promise<any>,
  message: 'success' | 'any' = 'success',
): Promise<ReturnType<T>> {
  let d = await data;
  return {
    data: d,
    message,
  };
}

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const generateSearchQuery = (searchObj: any = {}) => {
  let res = {};
  Object.entries(searchObj).forEach(([key, value]: [string, string]) => {
    if (!value) {
      return;
    }
    if (["id", "_id"].includes(key)) {
      res = {
        ...res,
        [key]: value,
      };
    }
    res = {
      ...res,
      [key]: new RegExp(value, 'i'),
    };
  });  
  return res;
};
