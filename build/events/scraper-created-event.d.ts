import { Subjects } from "./subjects";
export interface ScraperCreatedEvent {
    subject: Subjects.ScraperCreated;
    data: {
        id: string;
        title: string;
        url: string;
        content: object;
        userId: string;
    };
}
