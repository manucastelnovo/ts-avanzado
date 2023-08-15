import { Product } from './../models/product';
import { Category } from './../models/category';

export interface CreateProductDto extends Omit<Product, 'id' | 'category'>{
  categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}
