import {TBaseDataType} from "../components/Table/types";

export interface TUser extends TBaseDataType{
  isActive: boolean,
  balance: string,
  name: string,
  email: string,
}