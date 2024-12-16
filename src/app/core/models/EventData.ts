import { IResponceData } from "./IResponceData";

export class EventData implements IResponceData{
    eventid?:string;
    title?: string;
    description?: string;
    date?: Date;
    EventStartTime? : Date;
    EventEndTime? :Date;
    location?: string;
    imageUrl?:string
} 