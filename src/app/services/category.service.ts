import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../constants/config';
import Category from '../models/category';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CrudService<Category,number> {

  constructor(protected http:HttpClient) {
    super(http,`${Config.api.baseUrl}/category`);
   }
}
