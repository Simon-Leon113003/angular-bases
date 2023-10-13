import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import {v4 as iuud} from 'uuid'//agregamos esta importacion para generar un id con el comando
                              //npm i uuid

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public personajes: Personaje[] = [
    {id: iuud(), name: 'Krillin', power: 1000},//agregamos un id a la lista
    {id: iuud(),name: 'Goku', power: 9500},
    {id: iuud(),name: 'Vegueta', power: 12000}
];
  constructor() { }

  addPersonaje(personaje: Personaje): void{

    if(personaje.name.length === 0)
    {return};  
    const newPersonaje :  Personaje = {id : iuud(), ...personaje}//con esos 3 puntitos pones todos los atributos de la interface
    this.personajes.push(newPersonaje);
    console.log(this.personajes);


}

deletePersonaje(id: string){
    console.log(`padre recibe id ${id}`);
    this.personajes = this.personajes.filter(x => x.id !== id)
}
}
