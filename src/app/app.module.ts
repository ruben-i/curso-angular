import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProductoComponent } from './componentes/business/producto/producto.component';
import { ProductoBusquedaComponent } from './componentes/business/producto/componente/producto-busqueda/producto-busqueda.component';
import { ProductoListadoComponent } from './componentes/business/producto/componente/producto-listado/producto-listado.component';

import {ProductoService} from './servicios/producto.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductoComponent,
    ProductoBusquedaComponent,
    ProductoListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
