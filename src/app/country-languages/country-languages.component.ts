import { Component, Input } from '@angular/core';
import { LanguageService } from '../language.service';
import { Language } from '../language';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-languages',
  templateUrl: './country-languages.component.html',
  styleUrls: ['./country-languages.component.css']
})
export class CountryLanguagesComponent {
  country: Country;
  languages: Language[] = [];
  errorMessage: string;
  constructor(private languageService: LanguageService, private countryService: CountryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.languageService.getLanguagesByCountryId(id).subscribe({
          next: (languages) => {
            this.languages = languages;
          },
          error: (error) => {
            this.errorMessage = error;
          }
        })

        this.countryService.getCountryById(id).subscribe({
          next: (country) => {
            this.country = country;
            console.log(this.country);
          },
          error: (error) => {
            this.errorMessage = error;
          }
        })
      }
    })


  }
}
