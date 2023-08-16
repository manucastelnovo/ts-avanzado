import { CreateProductDto, UpdateProductDto } from "../dtos/product-dtos";
import { Product } from "../models/product";

export interface ProductHttpService{
    getAll():Product[];
    update(id:Product['id'],changes:UpdateProductDto): Product;
    create(dto:CreateProductDto):Product;
    findOne(id:Product['id']):Product | undefined;

}
