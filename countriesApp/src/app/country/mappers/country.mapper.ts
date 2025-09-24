import { Countries } from "../interfaces/countries.interface";
import { Country } from "../interfaces/country.interface";


export class CountryMapper{

 static  convertCountriesToCountry(countries:Countries):Country{
      return{
          cca2:countries.cca2,
          flag:countries.flag,
          flagSv:countries.flags.svg,
          name:countries.translations['spa'].common ?? "No name",
          capital: countries.capital.join(''),
          population:countries.population,
          region:countries.region,
          subRegion:countries.subregion
      }
  }

  static convertCountryToArray(country:Countries[]):Country[]{
    return country.map(this.convertCountriesToCountry);
  }

}
