import { Subjects } from "./subjects";

export interface ScrapingScheduleEvent {
  subject: Subjects.ScrapingSchedule;
  data: {
    scrapingId: string;
    scheduleFor: string;
    url: string;
    content: object;
  };
}
