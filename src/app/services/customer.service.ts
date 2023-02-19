import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../constants/config';
import Customer from '../models/customer';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends CrudService<Customer,number> {

  constructor(protected http:HttpClient) {
    super(http,`${Config.api.baseUrl}/customer`);
   }
}
