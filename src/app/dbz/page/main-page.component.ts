import { DbzService } from './../services/dbz.service';
import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent implements OnInit {

 
    constructor(private dbzServices: DbzService) { }

    ngOnInit() { }

    get personajes(): Personaje[]{

        
        return this.dbzServices.personajes
    }

    deletePersonaje(id: string): void{
        this.dbzServices.deletePersonaje(id);
    }

    addPersonaje(personaje: Personaje): void{
        this.dbzServices.addPersonaje(personaje);
    }

    
}