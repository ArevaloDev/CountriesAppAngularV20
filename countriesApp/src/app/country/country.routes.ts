import { Routes } from "@angular/router";
import { routes } from "../app.routes";
import { CountryLayouts } from "./layouts/country-layouts/country-layouts";
import { ByCapital } from "./pages/by-capital/by-capital";
import { ByCountry } from "./pages/by-country/by-country";
import { ByRegion } from "./pages/by-region/by-region";

export const countryRoutes:Routes = [
  {
    path: '',
    component: CountryLayouts,
    children: [
      {
        path: 'by-capital',
        component: ByCapital
      },
      {
        path: 'by-country',
        component: ByCountry
      },
      {
        path: 'by-region',
        component: ByRegion
      },
      {
        path: '**',
        redirectTo: 'by-capital'
      }
    ]
  }
]

export default countryRoutes;
