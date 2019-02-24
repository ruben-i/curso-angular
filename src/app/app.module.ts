import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProductoComponent } from './componentes/business/producto/producto.component';
import { ProductoBusquedaComponent } from './componentes/business/producto/componente/producto-busqueda/producto-busqueda.component';
import { ProductoListadoComponent } from './componentes/business/producto/componente/producto-listado/producto-listado.component';

import {ProductoService} from './servicios/producto.service';
import { NuevoProductoComponent } from './componentes/business/producto/componente/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './componentes/business/producto/componente/editar-producto/editar-producto.component';
import { ModalEliminarComponent } from './componentes/business/producto/componente/modal-eliminar/modal-eliminar.component';
import { ProductoFormComponent } from './componentes/business/producto/componente/producto-form/producto-form.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductoComponent,
    ProductoBusquedaComponent,
    ProductoListadoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    ModalEliminarComponent,
    ProductoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
