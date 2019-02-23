import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ProductoComponent } from './componentes/business/producto/producto.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'producto',component:ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
