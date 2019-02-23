import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../servicios/producto.service';
import { ProductoModel } from './modelo/producto.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos:ProductoModel[];
  observer:Observable<ProductoModel[]>;
  constructor(private servicio:ProductoService) {

   }

  ngOnInit() {
    this.observer=this.servicio.getProductos();
    
    this.observer.subscribe(response => {
      this.productos=response.map(item =>{ 
          return new ProductoModel(
            item.id,
            item.nombre,
            item.detalle,
            item.urlImg,
            item.activo,
            item.precio
            )}
      );//fin map
     
  });//fin suscribe

  }//fin init

  deleteProducto(producto:ProductoModel){
    console.log('Eliminar',producto);
    this.productos=this.productos.filter(p =>p.id!=producto.id);
  }

  disableProducto(producto:ProductoModel){
    console.log('deshabilitar',producto);
    producto.activo=!producto.activo;
  }
}