import { Component, computed, input } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-country-information',
  imports: [DecimalPipe],
  templateUrl: './country-information.html',
  styleUrl: './country-information.css'
})
export class CountryInformation {
  country = input.required<Country>();


  currentDate = computed( () => {
    return new Date().getFullYear();
  })
}
