import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductoModel } from '../../modelo/producto.model';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
  @Input() producto:ProductoModel;
  @Output() handleSubmit:EventEmitter<ProductoModel>=new EventEmitter<ProductoModel>();
  
  constructor() { }

  ngOnInit() {
    console.log('form producto ',this.producto);
  }

  onSubmit(){
    console.log('producto',this.producto);
    this.handleSubmit.emit(this.producto);
  }

}
