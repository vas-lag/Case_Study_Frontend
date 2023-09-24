import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Language } from './language';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private countriesUrl = "http://localhost:8080/api/v1/countries";
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    getLanguagesByCountryId(countryId: string): Observable<Language[]> {
        const url = `${this.countriesUrl}/${countryId}/languages`;
        return this.http.get<Language[]>(url);
    }
}