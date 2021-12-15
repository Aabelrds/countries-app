import { Routes } from '@angular/router';
import { ICountries } from '../../interfaces/countries.interfaces';
import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent implements OnInit {

  country:string =''.toUpperCase();
  searchResponse!:ICountries[];
  errorSearch:boolean = false;
  beforeRoute!:any;


  constructor(private countryService: CountriesService) {

  }

  ngOnInit(): void {
  }

  search(country:string):void{
      this.country = country;
      this.countryService.contrySearch(this.country).subscribe((resp)=>{
        // console.log(resp);
        this.searchResponse = resp;
        console.log(this.searchResponse);


      },(err)=>{
        this.errorSearch = true;
        console.log(err.message, 'error');

      })


  }

  goBack():void {

  }



}
