import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectName = "API Calling";
  productList  : any

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    console.log("AppComponent initialized...");
    this.productService.getProductList().subscribe({
      next: (data: any) => {console.log("API Data:", data);
        this.productList = data.products
      },
      error: (err) => console.error("API Error:", err)
    });
  }
}
