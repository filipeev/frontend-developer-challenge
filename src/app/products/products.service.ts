import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, endpoints } from '../../environments/environment';

@Injectable()
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  // SERVICES FOR PRODUCTS
  getProducts(index: number = 0): Promise<any> {
    // get a Promise of products based on page index
    return this.httpClient.get<any>(environment.api + endpoints.products + '?page=' + index).toPromise();
  }
}
