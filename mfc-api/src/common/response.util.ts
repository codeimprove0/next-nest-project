import { Injectable } from '@nestjs/common';

@Injectable()
export class ResponseUtil {
  successResponse(data: any, message: string = 'Success') {
    return {
      status: 200,
      message,
      data,
    };
  }

  errorResponse(message: string = 'Internal Server Error', status: number = 500) {
    return {
      status,
      message,
      errors:message,
    };
  }
}