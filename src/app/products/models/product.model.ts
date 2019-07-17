export class ProductModel {
  id: number;
  name: string;
  image: string;
  oldPrice: number;
  price: number;
  description: string;
  installments: {
    count: number;
    value: number;
  };
}
