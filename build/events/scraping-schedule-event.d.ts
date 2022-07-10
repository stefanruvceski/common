import { Subjects } from "./subjects";
import { ScrapingData } from "./types/scraping-data";
export interface ScrapingEveryScheduleEvent {
    subject: Subjects.ScrapingEverySchedule;
    data: {
        scrapingId: string;
        scheduleFor: number;
        url: string;
        content: ScrapingData[];
    };
}
export interface ScrapingCronScheduleEvent {
    subject: Subjects.ScrapingCronSchedule;
    data: {
        scrapingId: string;
        scheduleFor: string;
        url: string;
        content: ScrapingData[];
    };
}
