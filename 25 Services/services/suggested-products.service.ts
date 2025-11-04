import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuggestedProductsService {

  constructor() { 
    console.log("Suggested Products Service...");
  }

  name="Riyaz Pathan"

  getSuggestedProducts() {
    return [
      {productName:"Lenovo Legion Go", brand:"Lenovo", price:1000},
      {productName:"Asus Rog Strix", brand:"Asus", price:2000},
      {productName:"Dell Latitude 360", brand:"Dell", price:3000},
      {productName:"Mac Book Air", brand:"Apple", price:4000},
    ]
  }
}
