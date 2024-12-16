import { EventParticipant } from "../../models/EventParticipant";

export interface ParticipantEvents{
    message?:string;
    status ?: number;
    data:EventParticipant[]
}