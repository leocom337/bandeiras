import { SimplesComponent } from './views/bandeira/simples/simples.component';
import { MediasComponent } from './views/bandeira/medias/medias.component';
import { DificilComponent } from './views/bandeira/dificil/dificil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path:"bandeira-simples", component: SimplesComponent},
  {path:"bandeira-medias", component: MediasComponent},
  {path:"bandeira-dificil", component: DificilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
