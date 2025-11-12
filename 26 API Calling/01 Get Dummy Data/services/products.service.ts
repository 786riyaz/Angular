import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  // ✅ define this OUTSIDE the constructor, at class level
  getProductList(): Observable<any> {
  // getProductList():  {
    const url = 'https://dummyjson.com/products';
    return this.http.get(url);
  }
}
