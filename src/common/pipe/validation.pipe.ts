
import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

// there is ValidationPipe in nest, so there is no need to write this pipe by yourself.
@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;
    if (!metadata || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException('Request Validation Failed');
    }

    return value;
  }

  private toValidate(metaType: Function): boolean {
    const types: Function[] = [String, Boolean,  Number, Array, Object];
    return !types.includes(metaType);
  }
}
