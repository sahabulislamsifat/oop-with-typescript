//** Object oriented programming

import { digitalProduct } from "./models/digital_product";
import { PhysicalProduct } from "./models/PhysicalProduct";

// import { Product } from "./models/product";

// const sampleProduct = new Product(1, "demo product", 2, 3);
// console.log(sampleProduct);
// console.log(sampleProduct.id);
// console.log(sampleProduct.getDetails);

const showBrandName = new digitalProduct(
  2,
  "Hanif Enterprise",
  500,
  3,
  "Samsung"
);

const showBrandProduct = new PhysicalProduct(2, "Hanif Enterprise", 500, 3);

// console.log(showBrandName);
// console.log(showBrandName.getBrandName());
// console.log(showBrandName.getStockValue());
console.log(showBrandName.getDetails());
console.log(showBrandName.sell(250));
console.log(showBrandName.getDetails());
