import { ProductModel } from './product.model';

export class ProductsListModel {
  products: ProductModel[]; // Leave Product Model clean
  nextPage: string; // Declare next page here
}
