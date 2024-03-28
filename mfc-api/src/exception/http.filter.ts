import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus(); 
    console.log('response=',response)
    response
      .status(status)
      .json({
        status: status,
        message:'Auth Failed',
        errors: 'Authentication Error'
        // data:{
        //     timestamp: new Date().toISOString(),
        //     path: request.url,
        // }
      });
  }
}