import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { wishlistUrl } from 'src/app/config/api'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishlist() {
    return this.http.get<any[]>(wishlistUrl).pipe(
      map((result: any[]) => {
        let productIds = [];
        for (let item of result) {
          productIds.push(item.id)
        } 
        return productIds;
      })
    )
  }

  addProductToWishlist(productId: number): Observable<any> {
    return this.http.post(wishlistUrl, {id: productId});
  }

  removeProductFromWishlist(productId: number) {
    return this.http.delete(wishlistUrl + '/' + productId );
  }
}
