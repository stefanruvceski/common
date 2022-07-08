import { Subjects } from "./subjects";
export interface ScrapingStartEvent {
  subject: Subjects.ScrapingStart;
  data: {
    scrapingId: string;
    url: string;
    content: ScrapingData[];
  };
}
