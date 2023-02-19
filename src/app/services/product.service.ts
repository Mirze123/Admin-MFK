import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../constants/config';
import Product from '../models/product';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudService<Product,number> {

  constructor(protected http:HttpClient) {
    super(http,`${Config.api.baseUrl}/product`);
   }
}
