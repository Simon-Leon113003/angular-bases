import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  //atraves del decorador Input mandamos informacion del padre hijo
  @Input()
  public listPersonajes: Personaje[] = [{
    name: 'Trunks',
    power: 5000
  }]

  @Output()
  public onDeletePersonaje  = new EventEmitter<string>();

  constructor() { 
   
  }

  ngOnInit(): void {
  }

  emitIdPersonaje(id?: string){
    if(!id){return};
    this.onDeletePersonaje.emit(id);
    console.log(`hijo emite id ${id}`);
  }

}
