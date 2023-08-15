import axios from "axios";
import { Product } from "./models/product";

(async ()=>{

  async function getProduct():Promise<Product[]> {
    const promise = await  axios.get('https://api.escuelajs.co/api/v1/products');
    return promise.data;
  }


  const products = await getProduct();
  console.log(products);
})();
