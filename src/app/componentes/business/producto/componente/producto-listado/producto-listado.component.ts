import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { ProductoModel } from '../../modelo/producto.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-producto-listado',
  templateUrl: './producto-listado.component.html',
  styleUrls: ['./producto-listado.component.css']
})
export class ProductoListadoComponent implements OnInit {
  @Input() listaProductos;
  @Output() deleteProducto:EventEmitter<any>=new EventEmitter<any>();
  @Output() disableProducto:EventEmitter<any>=new EventEmitter<any>();
  constructor(private router:Router) { }

  ngOnInit() {
  }

  handleDelete(producto:ProductoModel){
    console.log("ir eliminar");
    this.deleteProducto.emit(producto);
  }

  handleDisable(producto:ProductoModel){
    console.log("ir a deshabilitar");
    this.disableProducto.emit(producto);
  }

  handleEdit(producto:ProductoModel){
    console.log('editar : ',producto);
    this.router.navigate(["/editar",producto.id]);
  }
}
