import { Component, OnInit } from '@angular/core';
import { Capital } from '../../interfaces/capital.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent implements OnInit {

  country:string =''.toUpperCase();
  capitalResponse!:Capital[];
  errorSearch:boolean = false;
  beforeRoute!:any;
  constructor(private countryService: CountriesService) { }

  ngOnInit(): void {
  }

  search(country:string):void{
    this.country = country;
    this.countryService.capitalSearch(this.country).subscribe((resp)=>{
      // console.log(resp);
      this.capitalResponse = resp;
      console.log(this.capitalResponse);


    },(err)=>{
      this.errorSearch = true;
      console.log(err.message, 'error');

    })


}

goBack():void{

}

}
