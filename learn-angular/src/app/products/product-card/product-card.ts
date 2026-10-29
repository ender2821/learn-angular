import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../product';

@Component({
  imports: [MatCardModule, MatButtonModule],
  selector: 'app-product-card',
  styleUrl: './product-card.scss',
  templateUrl: './product-card.html',
})
export class ProductCard {
  readonly product = input.required<Product>();
  readonly addButtonLabel = input<string>('Add to Cart');

  readonly addToCart = output<Product>();

  // emit the output signal when the button is clicked
  protected onAddToCart() {
    // console.log('button was clicked');
    this.addToCart.emit(this.product());
  }
}
