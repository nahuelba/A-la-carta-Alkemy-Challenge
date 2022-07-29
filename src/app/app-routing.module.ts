import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'',
    loadChildren: () => import('./pages/platos/platos.module').then(m => m.PlatosModule),
    canActivate:[AuthGuard]
  },
  {
    path: '**', redirectTo: '/' //Redirecciona si no existe el url
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
