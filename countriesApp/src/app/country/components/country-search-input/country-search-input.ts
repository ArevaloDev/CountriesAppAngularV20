import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
  styleUrl: './country-search-input.css'
})
export class CountrySearchInput {
  placeHolder = input("Buscar");
  value = output<string>();
}
