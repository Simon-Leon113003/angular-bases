import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  public name: string = 'iroman';
  public age: number = 45;

  constructor() { }

  ngOnInit(): void {
  }

  //uso de un getter para cambiar el nombre a mayuscula
  get capitalizeName():string {
    return this.name.toUpperCase();
  }

  //se crea un metodo
  getHeroDescription(): string {
  return `${this.name} - ${this.age}`;
  }

  //metodo para cambiar nombre
  changeHero(): void {
    //throw 'Metodo no implementado';
    this.name = 'Spiderman';

  }

  //metodo para cambiar edad
  changeEdad(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'iroman'
    this.age = 45;
  }

}
