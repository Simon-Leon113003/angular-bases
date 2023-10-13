import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dvz-add-personaje',
  templateUrl: './add-personaje.component.html',
  styles: [
  ]
})
export class AddPersonajeComponent implements OnInit {

  public personaje : Personaje ={
    name : '',
    power: 0
  };

  //En este punto quiero hacer un evento usando output() para poder 
  //mandar el personaje mitido al arreglo de personajes que se encuentra
  //en el padre asi lo agrega a lista
  
  @Output()
  public onNewPersonaje : EventEmitter<Personaje> = new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
  }

  emitPersonaje(): void{
    console.log('Emite desdes el hijo');
    console.log(this.personaje);

    this.onNewPersonaje.emit(this.personaje);

 
    this.personaje = {name : '', power : 0}
  }

}
