import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoModel } from '../componentes/business/producto/modelo/producto.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseURL:string;

  constructor(private httpClient:HttpClient) {     
      this.baseURL=environment.api;
      console.log('Producto Service ....',this.baseURL);      
  }

  getProductos(){
    return this.httpClient.get(`${this.baseURL}/productos`);
  }

  getProductById(id:number){
    console.log('get by id ',id);
    return this.httpClient.get(`${this.baseURL}/productos/${id}`);
  }

  createProduct(producto:ProductoModel){
    return this.httpClient.post(`${this.baseURL}/productos/`,producto);
  }

  updateProduct(producto:ProductoModel){
    const {id}=producto;
    return this.httpClient.put(`${this.baseURL}/productos/${id}`,producto);
  }

  deleteProduct(producto:ProductoModel){
    const {id}=producto;
    console.log('eliminar producto => ',id);
    return this.httpClient.delete(`${this.baseURL}/productos/${id}`);
  }

}
