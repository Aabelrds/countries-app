import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-input-country',
  templateUrl: './input-country.component.html',
  styleUrls: ['./input-country.component.css']
})
export class InputCountryComponent implements OnInit {
@Output() onEnter:EventEmitter<string> = new EventEmitter();
placeHolder!:string;

  constructor(router:Router) {
      this.placeHolder = router.url.replace('/','')

   }

  ngOnInit(): void {
    this.placeHolder === '' ? this.placeHolder = "country": this.placeHolder = this.placeHolder;
  }
  country:string ='';

  search(){

    this.onEnter.emit(this.country)
  }
}
