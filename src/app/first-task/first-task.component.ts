import { Component } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';

@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.css']
})
export class FirstTaskComponent {
  countries: Country[] = [];
  errorMessage: string;
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getAllCountires().subscribe({
      next: (countries) => {
        this.countries = countries;
      },
      error: (error) => {
        this.errorMessage = error;
      }
    })
  }
}
