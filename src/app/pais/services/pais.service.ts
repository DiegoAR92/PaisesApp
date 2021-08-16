import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl : string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  get httpParams(){
    return new HttpParams().set('fields','name;flag;capital;population;alpha2Code');
  }


  buscarPais(value:String): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${value}`;
    return this.http.get<Country[]>(url, {params:this.httpParams});
    //return this.http.get(url).pipe(catchError(err => of([])));
  }

  buscarCapital(value:String): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${value}`;
    return this.http.get<Country[]>(url, {params:this.httpParams});
    //return this.http.get(url).pipe(catchError(err => of([])));
  }

  obtenerPaisPorId(id:string): Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
    //return this.http.get(url).pipe(catchError(err => of([])));
  }

  obtenerPaisPorRegion(region:string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, {params:this.httpParams}).pipe(tap(console.log));
    //return this.http.get(url).pipe(catchError(err => of([])));
  }

}
