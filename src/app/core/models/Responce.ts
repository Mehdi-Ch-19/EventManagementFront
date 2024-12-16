import { IResponceData } from "./IResponceData";

export class Responce{
    data:IResponceData[];
    message:string;
    status:number;

    constructor(data : IResponceData[] , message : string , status :number){
        this.data = data;
        this.message = message;
        this.status = status;
    }
}