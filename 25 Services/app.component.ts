import { Component } from '@angular/core';
import { SuggestedProductsService } from './services/suggested-products.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectName = "Services";
  productsData: { 
  productName: string; 
  brand: string; 
  price: number; 
}[] = [];

  constructor(private suggestedProduct:SuggestedProductsService) {
    // this.getSuggestedProductDataFromService();
  }

  getSuggestedProductDataFromService() {
    console.log(this.suggestedProduct.getSuggestedProducts())
    console.log(this.suggestedProduct.name)
    this.productsData = this.suggestedProduct.getSuggestedProducts()
  }
}
