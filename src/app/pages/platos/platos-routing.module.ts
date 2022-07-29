import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorPlatosComponent } from './buscador-platos/buscador-platos.component';
import { MenuPlatosComponent } from './menu-platos/menu-platos.component';

const routes: Routes = [
  {
    path:'',
    component:MenuPlatosComponent
  },
  {
    path:'buscar',
    component:BuscadorPlatosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatosRoutingModule { }
