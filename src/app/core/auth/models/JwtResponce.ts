import { Role } from "../../models/Role";

export interface JwtResponce{
    token: string;
    id: number ; // TypeScript does not have a Long type, using number instead
    email: string;
    username: string;
    role: Role;
}