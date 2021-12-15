import { ICountries } from '../../interfaces/countries.interfaces';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Capital } from '../../interfaces/capital.interface';

@Component({
  selector: 'app-table-countries',
  templateUrl: './table-countries.component.html',
  styleUrls: ['./table-countries.component.css']
})
export class TableCountriesComponent implements OnInit {
  @Input() searchResponse!:ICountries[];
  @Input() capitalResponse!:Capital[];
  @Input() regionSearch!:ICountries[];
  @Input() showCountry!:ICountries[];
  anchor:boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.showCountry, 'En table');

  }


}
