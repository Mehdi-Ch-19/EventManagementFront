import { Role } from "./Role";

export abstract class User{
     id?: number | null;
     name?: string;
     email?: string;
     password?: string;
     role?: Role;
     type:string | undefined
}