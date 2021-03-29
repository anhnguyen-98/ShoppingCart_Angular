import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { CartItem } from '../models/cart-item';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((cartItemsResult: CartItem[]) => {
        let cartItems: CartItem[] = [];
        for (let item of cartItemsResult) {
          let productExists = false;
          for ( let i in cartItems ) {
            if (cartItems[i].productId === item.productId) {
              cartItems[i].qty++;
              productExists = true;
              break;
            }
          }
          if (!productExists) {
            cartItems.push(item);
          }
        }
       return cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {
    let cartItem: CartItem = new CartItem(product);
    return this.http.post(cartUrl, cartItem);
  }
}
