import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  value: string ='España';


  constructor() { }

  ngOnInit(): void {
  }

  buscar(){
   console.log(this.value);
   
  }

}
