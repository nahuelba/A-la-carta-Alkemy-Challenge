import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatoComponent } from './plato/plato.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PlatoComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    PlatoComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
