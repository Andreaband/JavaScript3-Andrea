import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [ CommonModule],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  showAll = false;
  heroImage: string = '';


  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      if (this.products.length > 0) {
        this.heroImage = 'http://localhost:3000/uploads/' + this.products[0].image_url;
      }
    });
  }


  toggleShowAll(): void {
    this.showAll = !this.showAll;
  }
}
