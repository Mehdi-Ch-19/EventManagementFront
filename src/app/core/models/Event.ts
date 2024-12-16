import { Category } from "./Category";
import { EventParticipant } from "./EventParticipant";
import { Organizator } from "./Organizator";

export class Event{
     eventid?: number; // Use number for Long
     title?: string;
     description?: string;
     date?: Date;
     EventStartTime? : Date;
     EventEndTime? :Date;
     location?: string;
     MaxCapacity?: number; // Use number for int
     imageUrl?: string;
     organizator?: Organizator; // Assuming Organizator is defined elsewhere
     category?: Category; // Assuming Category is defined elsewhere
     participants?: EventParticipant[] = [];

     
}