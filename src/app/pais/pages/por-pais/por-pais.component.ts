import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor:pointer;
    }
  `
  ]
})
export class PorPaisComponent{

  constructor(private paisService:PaisService){}

  value: string ='';
  hayError:boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  buscar( valor :string){
    this.value = valor;
    this.mostrarSugerencias = true;
    this.hayError = false;
   this.paisService.buscarPais(this.value).subscribe(resp=>{
     console.log(resp);
     this.paises = resp;
   }, (err) => {
     this.hayError = true;
     this.paises = [];
   });
   this.mostrarSugerencias =false;
  }

  sugerencias(value:string){
    this.hayError = false;
    this.mostrarSugerencias = true;
    this.value = value;
    this.paisService.buscarPais(value).subscribe(
      paises => {
        this.paisesSugeridos = paises.slice(0,3);
      },(err) =>{
        this.paisesSugeridos=[];
      }
    )
  }
}
