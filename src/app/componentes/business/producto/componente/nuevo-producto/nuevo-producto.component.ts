import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../../modelo/producto.model';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  productoNuevo:ProductoModel=new ProductoModel(null,null,null,null,true,10.2);

  constructor(private router:Router,private servicio:ProductoService) { }

  ngOnInit() {
  }

  handleSubmit(){
    console.log('actualizar');
    this.productoNuevo.id=1000;
    this.productoNuevo.urlImg="https://via.placeholder.com/100/92c952";
    this.servicio.createProduct(this.productoNuevo).subscribe(data=>console.log(data));
    this.router.navigate(['/producto']);
  }
}
