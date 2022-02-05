import {IUserRole} from "./user-role.inetrace";

export interface IUser {
  firstName: string;
  secondName: string;
  email: string;
  role: IUserRole;
}
