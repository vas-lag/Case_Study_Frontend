import { Component } from '@angular/core';
import { CountryService } from '../country.service';
import { CountryStats } from '../countryStats';

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.css']
})
export class SecondTaskComponent {
  countryStats: CountryStats[] = [];
  errorMessage: string;
  constructor(private coutnryService: CountryService) { }

  ngOnInit() {
    this.coutnryService.getCountriesStats().subscribe({
      next: (countryStats) => {
        this.countryStats = countryStats;
      },
      error: (error) => {
        this.errorMessage = error;
      }
    })
  }
}
