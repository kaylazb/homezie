import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
    BadRequestException,
  } from '@nestjs/common';
  import { Request, Response } from 'express';
import { ZodValidationPipe } from './pipes/zod-validation.pipe';

  
  @Catch()
  export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
  
      let status = HttpStatus.INTERNAL_SERVER_ERROR;
      let message = 'Internal server error';
      let errors = {};

      console.log(exception instanceof BadRequestException)
  
      if (exception instanceof HttpException) {
        console.log("http error exection")
        status = exception.getStatus();
        const res = exception.getResponse();
        if (typeof res === 'string') {
          message = res;
        } else if (typeof res === 'object') {
       
          const resObj = res as any;
          message = resObj.message || message;
          errors = res || {};
        }
      } 
  
      response.status(status).json({
        success: false,
        message,
        code: status,
        errors,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }
  