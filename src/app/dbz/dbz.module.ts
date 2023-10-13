import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //importamos para usar el ngModel

import { AddPersonajeComponent } from './components/add-personaje/add-personaje.component';
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './page/main-page.component';





@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddPersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
