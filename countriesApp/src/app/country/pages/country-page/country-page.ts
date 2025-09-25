import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryServices } from '../../services/country-services';
import { CountryInformation } from './country-information/country-information';

@Component({
  selector: 'app-country-page',
  imports: [CountryInformation],
  templateUrl: './country-page.html',
  styleUrl: './country-page.css'
})
export class CountryPage {
  code = inject(ActivatedRoute).snapshot.params['id'];
  countryServices = inject(CountryServices);

  countryResources =  rxResource({
    params: () => ({code:this.code}),
    stream: ({params}) => {
      return this.countryServices.searchById(params.code);
    }
  })

}
