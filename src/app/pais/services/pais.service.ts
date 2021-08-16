import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl : string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  buscarPais(value:String): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${value}`;
    return this.http.get<Country[]>(url);
    //return this.http.get(url).pipe(catchError(err => of([])));
  }
  

  buscarCapital(value:String): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${value}`;
    return this.http.get<Country[]>(url);
    //return this.http.get(url).pipe(catchError(err => of([])));
  }

  obtenerPaisPorId(id:string): Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
    //return this.http.get(url).pipe(catchError(err => of([])));
  }

}
