import { Component, ViewChild } from '@angular/core';
import { ExtendedCountryStats } from '../extendedCountryStats';
import { CountryService } from '../country.service';
import { RegionService } from '../region.service';
import { Region } from '../region';
import { MatPaginator, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-third-task',
  templateUrl: './third-task.component.html',
  styleUrls: ['./third-task.component.css']
})
export class ThirdTaskComponent {
  extendedCountryStats: ExtendedCountryStats[] = [];
  minYear: number;
  maxYear: number;
  yearFrom: number = 1900;
  yearTo: number = 2030;
  years: number[] = [];
  regions: Region[] = [];
  selectedRegion: string = "all";
  totalItems: number;
  pageSize: number = 50;
  pageEvent?: PageEvent;
  errorMessage: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private coutnryService: CountryService, private regionService: RegionService) { }

  populateRegions() {
    this.regionService.getAllRegions().subscribe({
      next: (regions) => {
        this.regions = regions;
      },
      error: (error) => {
        this.errorMessage = error;
      }
    })
  }

  populateYears() {
    this.coutnryService.getYears().subscribe({
      next: (years) => {
        this.minYear = years.minYear;
        this.maxYear = years.maxYear;
        for (let year = this.minYear; year <= this.maxYear; year++) {
          this.years.push(year);
        }
        this.yearFrom = this.minYear;
        this.yearTo = this.maxYear;
      }
    })
  }

  ngOnInit() {
    this.populateRegions();
    this.populateYears();

    this.fetchData();
  }

  fetchData() {
    this.coutnryService.getExtendedCountryStats(this.yearFrom, this.yearTo, this.selectedRegion, this.pageEvent ? this.pageEvent.pageIndex : 0, this.pageEvent ? this.pageEvent.pageSize : this.pageSize).subscribe({
      next: (extendedCountryStats) => {
        this.extendedCountryStats = extendedCountryStats.content;
        this.totalItems = extendedCountryStats.totalElements;
      },
      error: (error) => {
        this.errorMessage = error;
      }
    })
  }

  onFilterChange() {
    if (this.pageEvent) {
      this.pageEvent.pageIndex = 0;
    }
    this.fetchData();
  }

  onPageChange(event: PageEvent) {
    this.pageEvent = event;
    this.fetchData();
  }
}
