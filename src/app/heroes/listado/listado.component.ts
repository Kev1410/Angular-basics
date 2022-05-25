import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {

  heroes: string[] = ['Luke Skywalker', 'Obi-Wan Kenobi', 'Yoda', 'Mace Windu'];
  heroeBorrado: string = '';

  borrarHeroe(){
    this.heroeBorrado  = this.heroes.shift() || '';
  }

}
