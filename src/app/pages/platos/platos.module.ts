import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatosRoutingModule } from './platos-routing.module';
import { MenuPlatosComponent } from './menu-platos/menu-platos.component';
import { BuscadorPlatosComponent } from './buscador-platos/buscador-platos.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    MenuPlatosComponent,
    BuscadorPlatosComponent
  ],
  imports: [
    CommonModule,
    PlatosRoutingModule,
    ComponentsModule
  ]
})
export class PlatosModule { }
