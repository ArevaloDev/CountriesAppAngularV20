import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CountryServices } from '../../services/country-services';

@Component({
  selector: 'app-country-page',
  imports: [],
  templateUrl: './country-page.html',
  styleUrl: './country-page.css'
})
export class CountryPage {
  code = inject(ActivatedRoute).snapshot.params['code'];
  countryServices = inject(CountryServices);

  countryResources =  rxResource({
    params: () => ({code:this.code}),
    stream: ({params}) => {
      return this.countryServices.searchById(params.code);
    }
  })

}
