import { Subjects } from "./subjects";
export interface ScrapingStopEvent {
    subject: Subjects.ScrapingStop;
    data: {
        jobId: string | number;
    };
}
