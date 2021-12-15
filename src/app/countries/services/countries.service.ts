import { Router } from '@angular/router';
import { ICountries } from '../interfaces/countries.interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Capital } from '../interfaces/capital.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
private apiUrl: string = `https://restcountries.com/v3.1`;
private capitalUrl:string = `https://restcountries.com/v2`;
// https://restcountries.com/v3.1/alpha/{code}


  constructor(private hhtp:HttpClient) {

   }

   contrySearch(country:string): Observable<ICountries[]>{

      const url = `${ this.apiUrl }/name/${ country }`;

      return this.hhtp.get<ICountries[]>(url);
   }

   capitalSearch(country:string): Observable<Capital[]>{

    const url = `${ this.capitalUrl }/capital/${ country }`;

    return this.hhtp.get<Capital[]>(url);
 }

 RegionSearch(country:string): Observable<ICountries[]>{

  const url = `${ this.apiUrl }/region/${ country }`;

  return this.hhtp.get<ICountries[]>(url);
}

showCountry(country:string): Observable<ICountries[]>{

  const url = `${ this.apiUrl }/alpha/${ country }`;

  return this.hhtp.get<ICountries[]>(url);
}


}
