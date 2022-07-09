import { ScrapingStatus } from "./scraping-status";
export interface ScrapingData {
    name: string;
    selector: string;
    status?: ScrapingStatus;
    value?: string;
}
