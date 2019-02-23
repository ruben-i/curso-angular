import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ProductoComponent } from './componentes/business/producto/producto.component';
import { NuevoProductoComponent } from './componentes/business/producto/componente/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './componentes/business/producto/componente/editar-producto/editar-producto.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'producto',component:ProductoComponent},
  {path:'nuevo',component:NuevoProductoComponent},
  {path:'editar/:id',component:EditarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
