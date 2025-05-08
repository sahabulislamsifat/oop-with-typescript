import { Product } from "./product";

//* OOP Inheritance
export class digitalProduct extends Product {
  //   brand: string;
  constructor(
    id: number,
    name: string,
    price: number,
    quantity: number,
    public brand: string
  ) {
    super(id, name, price, quantity);
    this.brand = brand;
  }
  getBrandName() {
    return `${this.name} this product of this brands ${this.brand}`;
  }
}
