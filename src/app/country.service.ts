import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './country';
import { Injectable } from '@angular/core';
import { CountryStats } from './countryStats';
import { ExtendedCountryStats } from './extendedCountryStats';
import { PagedExtendedCountryStats } from './pagedExtendedCountryStats';
import { Years } from './years';

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    private countriesUrl = "http://localhost:8080/api/v1/countries";
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }  

    getAllCountires(): Observable<Country[]> {
        return this.http.get<Country[]>(this.countriesUrl);
    }  

    getCountryById(countryId: string): Observable<Country> {
        const url = `${this.countriesUrl}/${countryId}`;
        return this.http.get<Country>(url);
    }

    getYears(): Observable<Years> {
        const url = `${this.countriesUrl}/extendedstats/years`;
        return this.http.get<Years>(url);
    }

    getCountriesStats(): Observable<CountryStats[]> {
        const url = `${this.countriesUrl}/stats`;
        return this.http.get<CountryStats[]>(url);
    }

    getExtendedCountryStats(yearFrom: number, yearTo: number, region: string, page: number, size: number): Observable<PagedExtendedCountryStats> {
        const url = `${this.countriesUrl}/extendedstats`;
        
        if (region !== "all") {
            const params = {yearFrom: yearFrom, yearTo: yearTo, region: region, page: page, size:size};
            return this.http.get<PagedExtendedCountryStats>(url, {
                params: params
            });
        } else {
            const params = {yearFrom: yearFrom, yearTo: yearTo, page:page, size:size};
            return this.http.get<PagedExtendedCountryStats>(url, {
                params: params
            });
        }
        
    }
}
