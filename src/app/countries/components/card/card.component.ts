import { ICountries } from '../../interfaces/countries.interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {
@Input() showCountry!:ICountries[];
  constructor() { }

  ngOnInit(): void {
  }

}
