import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import { UpdateUserInfoRequest } from '../models/UserInfo';
import { MarriedStatus } from '../interfaces/UserInfo';

export function IsMarriedRequired(options?: ValidationOptions) {
  return function (object: UpdateUserInfoRequest, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: options,
      constraints: [],
      validator: {
        validate(value: any, validationArguments: ValidationArguments) {
          const userInformation =
            validationArguments.object as UpdateUserInfoRequest;
          return userInformation.age < 18 || value !== MarriedStatus.NoData;
        },
        defaultMessage() {
          return 'Married is required when age is 18 or older';
        },
      },
    });
  };
}
