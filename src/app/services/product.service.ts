import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  readonly APIUrl="http://localhost:3000/products";
  getProductList(): Observable<Product[]>{
    return this.http.get<Product[]>(this.APIUrl);
  }

  detailProduct(id){
    return this.http.get(this.APIUrl+'/'+id);

  }

}
