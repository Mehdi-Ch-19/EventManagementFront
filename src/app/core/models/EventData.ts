import { IResponceData } from "./IResponceData";

export class EventData implements IResponceData{
    eventid?:number;
    title?: string;
    description?: string;
    date?: Date;
    EventStartTime? : Date;
    EventEndTime? :Date;
    location?: string;
    imageUrl?:string;
    numOfPartcipant?:number
} 