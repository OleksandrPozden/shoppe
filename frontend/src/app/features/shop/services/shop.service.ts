import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { IShopData } from '../interfaces/IShopData';
import { IQuery } from '../interfaces/IQuery';
import { environment } from '../../../../environments/environment';
import { IShopItem } from '../interfaces/IShopItem';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient) {}

  getProducts(query: IQuery): Observable<IShopData> {
    const params = { ...query };
    return this.http
      .get<IShopData>(`${environment.api}/products/`, { params })
      .pipe(
        catchError(() => {
          let errorMessage = 'An unknown error occurred!';
          return throwError(() => errorMessage);
        }),
      );
  }

  getProduct(id: number): Observable<IShopItem> {
    return this.http.get<IShopItem>(`${environment.api}/products/${id}`).pipe(
      catchError(() => {
        let errorMessage = 'An unknown error occurred!';
        return throwError(() => errorMessage);
      }),
    );
  }
}
