import { Component, OnInit } from '@angular/core';
import { ICountries } from '../../interfaces/countries.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent implements OnInit {

  country:string =''.toUpperCase();
  regionSearch!:ICountries[];
  errorSearch:boolean = false;
  beforeRoute!:any;


  constructor(private countryService: CountriesService) {

  }

  ngOnInit(): void {
  }

  search(country:string):void{
      this.country = country;
      this.countryService.RegionSearch(this.country).subscribe((resp)=>{
        // console.log(resp);
        this.regionSearch = resp;
        console.log(this.regionSearch);


      },(err)=>{
        this.errorSearch = true;
        console.log(err.message, 'error');

      })


  }

  goBack():void {

  }

}
