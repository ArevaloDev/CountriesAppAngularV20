import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, tap, throwError } from 'rxjs';
import { Countries } from '../interfaces/countries.interface';
import { CountryMapper } from '../mappers/country.mapper';

@Injectable({
  providedIn: 'root'
})
export class CountryServices {
   private API_URL  = 'https://restcountries.com/v3.1';
  http = inject(HttpClient);


  searchByCapital(query:string){
    const value = query.toLowerCase();
    return this.http.get<Countries[]>(`${this.API_URL}/capital/${value}`).pipe(
      map((response) => CountryMapper.convertCountryToArray(response)),
      catchError(() => {
            return throwError(() => new Error("Error al buscar pais por capital"))
      }),

    )
  }


  searchByCountry(query:string){
    return this.http.get<Countries[]>(`${this.API_URL}/name/${query}`).pipe(
      map(response => CountryMapper.convertCountryToArray(response)),
      catchError(() => {
        return throwError(() =>  new Error("Error al buscar pais "))
      })
    )
  }

  searchById(code:string){
    return this.http.get<Countries[]>(`${this.API_URL}/alpha/${code}`).pipe(
      tap( response => console.log(response)),
      catchError(() => {
        return throwError(() =>  new Error("Error al buscar ppais por codigo"))
      })
    )
  }
}
