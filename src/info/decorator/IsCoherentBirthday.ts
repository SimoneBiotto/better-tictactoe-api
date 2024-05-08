import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import { UpdateUserInfoRequest } from '../models/UserInfo';

export function IsCoherentBirthday(options?: ValidationOptions) {
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
          const today = new Date();
          let age = today.getFullYear() - userInformation.birth.getFullYear();
          if (
            today.getMonth() < userInformation.birth.getMonth() ||
            (today.getMonth() === userInformation.birth.getMonth() &&
              today.getDate() < userInformation.birth.getDate())
          ) {
            age--;
          }
          return age === userInformation.age;
        },
        defaultMessage() {
          return 'The birthday is not coherent with the provided age';
        },
      },
    });
  };
}
