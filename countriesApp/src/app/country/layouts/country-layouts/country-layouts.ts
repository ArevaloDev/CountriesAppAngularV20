import { Component } from '@angular/core';
import { TopMenu } from "../../components/top-menu/top-menu";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-country-layouts',
  imports: [TopMenu, RouterOutlet],
  templateUrl: './country-layouts.html',
  styleUrl: './country-layouts.css'
})
export class CountryLayouts {

}
