import { JwtResponce } from "./JwtResponce";

export interface LoginSucessResponceDto{
    message:string;
    status : number;
    data:JwtResponce;
}