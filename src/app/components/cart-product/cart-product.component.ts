import { Component, input, output } from '@angular/core';
import { ProductItemCart } from '../../interfaces/store.interface';

@Component({
  selector: 'app-cart-product',
  imports: [],
  templateUrl: './cart-product.component.html',
  styleUrl: './cart-product.component.css'
})
export default class CartProductComponent {

  productCartItem = input.required<ProductItemCart>();
  onRemove = output<number>();
  onIncrease = output<ProductItemCart>();
  onDecrease = output<ProductItemCart>();

}
