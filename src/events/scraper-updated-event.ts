import { Subjects } from "./subjects";

export interface ScraperUpdatedEvent {
  subject: Subjects.ScraperUpdated;
  data: {
    id: string;
    title: string;
    url: string;
    content: object;
  };
}
