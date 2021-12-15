import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ICountries } from '../../interfaces/countries.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {
  country:string =''.toUpperCase();
  regionSearch!:ICountries[];
  errorSearch:boolean = false;
  beforeRoute!:any;
  showCountry!:ICountries[];
  constructor(private countryService: CountriesService,route:Router) {
    this.beforeRoute = route.url.replace('/country/','');
  }

  ngOnInit(): void {
    console.log(this.beforeRoute,'Route');
    this.search();
    console.log(this.showCountry, 'fetch');


  }

  search():void{

    this.countryService.showCountry(this.beforeRoute).subscribe((resp)=>{
      // console.log(resp);
      this.showCountry = resp;
      console.log(this.showCountry);


    },(err)=>{
      this.errorSearch = true;
      console.log(err.message, 'error');

    })


}

goBack():void {

}

}
