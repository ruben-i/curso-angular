import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoModel } from '../componentes/business/producto/modelo/producto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient:HttpClient) {
      console.log('Producto Service ....');
  }

  getProductos():Observable<ProductoModel[]>{
    return this.httpClient.get<ProductoModel[]>("http://localhost:3000/productos");
  }
}
