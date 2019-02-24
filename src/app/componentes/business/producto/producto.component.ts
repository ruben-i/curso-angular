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
  constructor(private servicio:ProductoService) {

   }

  ngOnInit() {
   this.listarProducto();
  }//fin init

  deleteProducto(producto:ProductoModel){
    console.log('Eliminar',producto);
    //this.productos=this.productos.filter(p =>p.id!=producto.id);
    this.servicio.deleteProduct(producto).subscribe(response =>console.log(response));
    this.ngOnInit();
  }

  disableProducto(producto:ProductoModel){
    console.log('deshabilitar',producto);
    producto.activo=!producto.activo;
  }

  private listarProducto(){
    this.servicio.getProductos().subscribe((data:ProductoModel[])=>this.productos=data);
   
  }

}