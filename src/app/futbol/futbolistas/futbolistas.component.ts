import { Component, Input } from '@angular/core';
import { Futbolista } from '../interfaces/futbol.interface';

@Component({
  selector: 'app-futbolistas',
  templateUrl: './futbolistas.component.html',
})
export class FutbolistasComponent {

  @Input() futbolistas: Futbolista[] = [];
}
