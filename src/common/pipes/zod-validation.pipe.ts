// src/common/pipes/zod-validation.pipe.ts
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ZodSchema } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema<any>) {}

  transform(value: any, metadata: ArgumentMetadata) {

    const result = this.schema.safeParse(value);

    if (!result.success) {
        console.log(result.error)
      throw new BadRequestException(result.error.flatten());
    }
    return result.data;
  }
}
