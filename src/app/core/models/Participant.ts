import { EventParticipant } from "./EventParticipant";
import { User } from "./User";

export class Participant extends User{
    adresee?:string
    eventList ?: EventParticipant[]
}