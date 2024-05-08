import { Injectable, Logger } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { UpdateInfoRequest as UpdateInfoRequestInterface } from './interfaces';
import { UpdateUserInfoRequest as UpdateInfoUserRequestInterface } from './interfaces/UserInfo';
import { BaseResponse } from '../interfaces';
import { UpdateInfoRequest } from './models';
import { UpdateUserInfoRequest } from './models/UserInfo';

@Injectable()
export class InfoService {
  logger = new Logger();
  async validateInfo(
    rawData: UpdateInfoRequestInterface,
  ): Promise<BaseResponse> {
    const data = plainToClass(UpdateInfoRequest, rawData);
    const validationErrors = await validate(data);
    if (validationErrors.length > 0) {
      return {
        success: false,
        errors: validationErrors,
      };
    }
    return {
      success: true,
      data,
    };
  }

  async validateUserInfo(
    rawData: UpdateInfoUserRequestInterface,
  ): Promise<BaseResponse> {
    const data = plainToClass(UpdateUserInfoRequest, rawData);
    const validationErrors = await validate(data);
    if (validationErrors.length > 0) {
      return {
        success: false,
        errors: validationErrors,
      };
    }
    return {
      success: true,
      data,
    };
  }
}
