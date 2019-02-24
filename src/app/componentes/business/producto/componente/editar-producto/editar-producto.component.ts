import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoModel } from '../../modelo/producto.model';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  productoEdit:ProductoModel;

  constructor(private router:Router,private route:ActivatedRoute,private servicio:ProductoService) { }

  ngOnInit() {
    console.log('id',this.route.snapshot.paramMap.get('id'));
    this.servicio.getProductById(+this.route.snapshot.paramMap.get('id')).subscribe((data:ProductoModel)=>this.productoEdit=data);
    
    console.log('producto ',this.productoEdit);
  }

  handleSubmit(){
    this.servicio.updateProduct(this.productoEdit).subscribe(data =>console.log('actualizar',data));
    this.router.navigate(['/producto']);
  }
}
