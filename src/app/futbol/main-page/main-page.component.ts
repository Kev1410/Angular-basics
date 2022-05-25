import { Component } from '@angular/core';
import { Futbolista } from '../interfaces/futbol.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  futbolistas: Futbolista[] = [
  {
    nombre: 'Alexis Vega',
    media: 81,
  },
  {
    nombre: 'Neymar',
    media: 91
  }
  ];
  
  nuevo: Futbolista= {
    nombre: 'Leo Messi',
    media:   94
  }

  agregarNuevoFutbolista(argumento: Futbolista){
    this.futbolistas.push(argumento);
    
  }

}
