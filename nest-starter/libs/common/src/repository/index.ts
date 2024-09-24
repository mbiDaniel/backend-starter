import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose';
import { generateSearchQuery, returnSuccess } from '../helpers';
import { HttpException, HttpStatus } from '@nestjs/common';

export abstract class EntityRepository<T extends Document> {
  constructor(protected readonly entityModel: Model<T>) {}

  async findOne(
    entityFilterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<any | null> {
    try {
      return returnSuccess(
        this.entityModel
          .findOne(entityFilterQuery, {
            _id: 0,
            __v: 0,
            ...projection,
          })
          .exec(),
      );
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: error.message,
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  async find(
    entityFilterQuery?: FilterQuery<T>,
    projection?: Record<string, unknown>,
    skipSearch?: boolean,
  ) {
    try {
      return returnSuccess(
        this.entityModel.find( skipSearch ? entityFilterQuery :  generateSearchQuery(entityFilterQuery), {
          __v: 0,
          ...projection,
        }),
      );
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: error.message,
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  async create(createEntityData: unknown) {
    try {
      const data = await this.entityModel.create(createEntityData);
      return returnSuccess(data as any);
    } catch (error) {
      if (error.code === 11000) {
        let err = new Error('Data already exist');
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: err.message,
          },
          HttpStatus.FORBIDDEN,
          {
            cause: err,
          },
        );
      }

      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: error.message,
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  async update(
    entityFilterQuery: FilterQuery<T>,
    updateEntityData: UpdateQuery<unknown>,
  ) {
    try {      
      return returnSuccess(
        this.entityModel.findOneAndUpdate(entityFilterQuery, updateEntityData, {
          new: true,
        }),
      );
    } catch (error) {      
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: error.message,
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  async delete(entityFilterQuery: FilterQuery<T>) {
    try {
      return returnSuccess(this.entityModel.deleteMany(entityFilterQuery));
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: error.message,
       }, HttpStatus.FORBIDDEN,{
         cause:error
       });
    }

  }
}
