import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right:5px;
    }
  `]
})
export class PorRegionComponent{
  paises: Country[] = [];
  regiones: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  regionActiva: string ='';
  constructor(private paisService: PaisService) { }

  activarRegion(region:string){
    if(this.regionActiva === region) return;
    this.regionActiva = region;
    this.paisService.obtenerPaisPorRegion(this.regionActiva).subscribe(resp => { this.paises = resp});
  }

  getButtonActive(region:string){
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

}
