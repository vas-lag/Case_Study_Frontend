import { ExtendedCountryStats } from "./extendedCountryStats";

export interface PagedExtendedCountryStats {
    content: ExtendedCountryStats[];
    totalElements: number;
    totalPages: number;
    last: boolean;
    size: number;
    number: number;
    sort: any;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}