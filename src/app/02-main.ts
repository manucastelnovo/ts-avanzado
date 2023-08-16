import { ProductMemoryService } from "./service/product-memori-service";

const productService = new ProductMemoryService();

productService.create(
  {
    title:'pepe',
    price:1000,
    description:'fuma porro',
    image:'pepe',
    categoryId:1
  }
);

const product = productService.getAll();

const productId = product[0].id;

productService.update(productId,{
  title:'cambiar nombre'
});

const rta = productService.findOne(productId)
