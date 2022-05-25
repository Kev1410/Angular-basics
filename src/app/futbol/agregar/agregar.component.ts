import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Futbolista } from '../interfaces/futbol.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {


  @Input()nuevo: Futbolista = {

    nombre: '',
    media: 0

  }

  @Output() OnNuevoFutbolista: EventEmitter <Futbolista> = new EventEmitter();

  cambiarNombre(event:any){

    console.log(event.target.value);
  }

  agregar(){
      if (this.nuevo.nombre.trim().length===0) {
        return;
      }

    this.OnNuevoFutbolista.emit(this.nuevo);
    
    this.nuevo={
      nombre: '',
      media: 0
    }
    
  }


}
