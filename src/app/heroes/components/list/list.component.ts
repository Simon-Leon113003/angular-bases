import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public heroName: string[] = ['Spiderman','Iroman','Hulk']
  public deleteHero?: string;
  constructor() { }

  ngOnInit(): void {
  }

  removeLasthero(): void{
    this.deleteHero = this.heroName.pop();
    
  }

}
