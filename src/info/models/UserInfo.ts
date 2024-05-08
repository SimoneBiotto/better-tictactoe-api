import {
  MarriedStatus,
  UpdateUserInfoRequest as UpdateUserInfoRequestInterface,
} from '../interfaces/UserInfo';
import {
  IsDate,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IsMarriedRequired } from '../decorator/IsMarriedRequired';
import { IsCoherentBirthday } from '../decorator/IsCoherentBirthday';

export class UpdateUserInfoRequest implements UpdateUserInfoRequestInterface {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(50)
  name: string;
  @IsInt()
  @Min(1)
  @Max(150)
  @Type(() => Number)
  age: number;
  @IsMarriedRequired()
  @IsIn([MarriedStatus.Yes, MarriedStatus.No, MarriedStatus.NoData])
  married: MarriedStatus;
  @IsDate()
  @IsCoherentBirthday()
  @Type(() => Date)
  birth: Date;
}
