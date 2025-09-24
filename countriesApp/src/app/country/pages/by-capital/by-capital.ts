import { Component, inject, Query, signal } from '@angular/core';
import { CountrySearchInput } from "../../components/country-search-input/country-search-input";
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { CountryServices } from '../../services/country-services';
import { CountryList } from "../../components/country-list/country-list";

@Component({
  selector: 'app-by-capital',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-capital.html',
  styleUrl: './by-capital.css'
})
export class ByCapital {
  query = signal('');
  countryServices = inject(CountryServices);


  countryResources = rxResource({
    params: () => ({query:this.query()}),
    stream: ({params}) => {
      if(!params.query) return of([]);
      return this.countryServices.searchByCapital(params.query);
    }
  })
}
