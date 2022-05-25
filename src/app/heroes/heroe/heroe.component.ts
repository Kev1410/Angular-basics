import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

    nombre: string = "Luke Skywalker";
    edad  : number = 19;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre(): void{
        this.nombre = "Obi-Wan Kenobi";
    }

    cambiarEdad(): void{
        this.edad = 40;
    }
}