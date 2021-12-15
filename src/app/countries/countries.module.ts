import { AppModule } from './../app.module';
import { RouterModule } from '@angular/router';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ShowCountryComponent } from './pages/show-country/show-country.component';
import { FormsModule } from '@angular/forms';
import { CountriesService } from './services/countries.service';
import { TableCountriesComponent } from './components/table-countries/table-countries.component';
import { InputCountryComponent } from './components/input-country/input-country.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    ShowCountryComponent,
    TableCountriesComponent,
    InputCountryComponent,
    CardComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports:[
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    ShowCountryComponent
  ],
  providers: [CountriesService]
})
export class CountriesModule { }
