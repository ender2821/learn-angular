import { Component, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [ProductCard, MatIcon],
  selector: 'app-products-grid',
  styleUrl: './products-grid.scss',
  templateUrl: './products-grid.html',
})
export class ProductsGrid {

  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 100,
      originalPrice: 120,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 200,
      originalPrice: 250,},
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 300,
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description for Product 4',
      price: 400,
    },
  ]);
}
