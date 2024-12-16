import { User } from "./User";

export class Organizator extends User{
    phoneNumber?:string;
    website?:string;
    events?:Event[]
}