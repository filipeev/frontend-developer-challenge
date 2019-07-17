import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { ProductsListModel } from './models/productsList.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productsList: ProductsListModel = new ProductsListModel();
  private nextPage = 0;
  public isLoading: boolean;
  public error: HttpErrorResponse;
  constructor(
    // Declare Products service
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    // Get a list of products
    this.productsService.getProducts(this.nextPage).then(
      (result: ProductsListModel) => {
        this.isLoading = false;
        // If it's everything right, handle products
        if (this.productsList.products) {
          // Push products to existing list
          result.products.forEach((product) => {
            this.productsList.products.push(product);
          });
        } else {
          // If product list is empty or undefined receive first result
          this.productsList = result;
        }
        // Slice url to get next page parameter
        // tslint:disable-next-line: radix
        this.nextPage = parseInt(result.nextPage.split('=')[1]);
        // Clean errors
        this.error = null;
      },
      (error) => {
        // Handle possible errors here
        this.isLoading = false;
        this.error = error;
      }
    );
  }

}
