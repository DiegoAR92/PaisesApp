import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  constructor(private paisService:PaisService){}

  value: string ='';
  hayError:boolean = false;
  paises: Country[] = [];

  buscar( valor :string){
    this.value = valor;
    this.hayError = false;
   this.paisService.buscarCapital(this.value).subscribe(resp=>{
     console.log(resp);
     this.paises = resp;
   }, (err) => {
     this.hayError = true;
     this.paises = [];
   });
  }

  sugerencias(value:string){
    this.hayError = false;
    this.value = value;
  }

}
