//** Object oriented programming

import { Product } from "./models/product";

const sampleProduct = new Product(1, "demo product", 2, 3);
// console.log(sampleProduct);
// console.log(sampleProduct.id);
console.log(sampleProduct.getDetails);
