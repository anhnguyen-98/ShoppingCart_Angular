import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service'
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  cartTotal = 0;
  constructor(private msg: MessengerService, private cartService: CartService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product)=> {
      this.loadCartItem();
    })
    this.loadCartItem();
  }

  loadCartItem() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    });
  }

  calcCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(cartItem => {
        this.cartTotal += (cartItem.qty * cartItem.price);
      })
  }

}
