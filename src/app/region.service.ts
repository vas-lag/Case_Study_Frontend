import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Region } from "./region";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RegionService {
    private regionsUrl = "http://localhost:8080/api/v1/regions";
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    getAllRegions(): Observable<Region[]> {
        return this.http.get<Region[]>(this.regionsUrl);
    }
}