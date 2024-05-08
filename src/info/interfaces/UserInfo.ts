export interface UpdateUserInfoRequest {
  name: string;
  age: number;
  married: MarriedStatus;
  birth: Date;
}

export enum MarriedStatus {
  Yes = 'yes',
  No = 'no',
  NoData = 'nodata',
}
