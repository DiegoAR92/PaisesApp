import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  constructor(private paisService:PaisService){}

  value: string ='España';
  hayError:boolean = false;
  paises: Country[] = [];

  buscar( valor :string){
    this.value = valor;
    this.hayError = false;
   this.paisService.buscarPais(this.value).subscribe(resp=>{
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
