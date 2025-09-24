import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-list',
  imports: [RouterLink],
  templateUrl: './country-list.html',
  styleUrl: './country-list.css'
})
export class CountryList {
  countries = input.required<Country[]>();
  errorMessage = input<string | unknown | null>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
}
