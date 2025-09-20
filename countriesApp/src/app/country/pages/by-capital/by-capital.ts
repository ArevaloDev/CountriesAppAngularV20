import { Component } from '@angular/core';
import { CountrySearchInput } from "../../components/country-search-input/country-search-input";

@Component({
  selector: 'app-by-capital',
  imports: [CountrySearchInput],
  templateUrl: './by-capital.html',
  styleUrl: './by-capital.css'
})
export class ByCapital {

}
