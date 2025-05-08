import { Purchasable } from "../interfaces/polymorphisom_interface";
import { Product } from "./product";

export class PhysicalProduct extends Product implements Purchasable {
  getStockValue(): number {
    return this.price;
  }
}
