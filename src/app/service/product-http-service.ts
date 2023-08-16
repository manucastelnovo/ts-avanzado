import { UpdateProductDto, CreateProductDto } from "../dtos/product-dtos";
import { Product } from "../models/product";
import { ProductService } from "../models/product-service";
import axios from 'axios';

export class ProductHttpService implements ProductService{

  private url='https://api.escuelajs.co/api/v1/products';


  async getAll(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }
  async update(id: Product['id'], changes: UpdateProductDto): Promise<Product> {
    const { data } = await axios.put<Product>(`${this.url}/${id}`);
    return data;
  }
  async create(dto: CreateProductDto): Promise<Product> {
    const { data } = await axios.post<Product>(this.url,dto);
    return data;
  }
  async findOne(id: number): Promise<Product | undefined>  {
    const { data } = await axios.get<Product | undefined>(`${this.url}/${id}`);
    return data;
  }
}
