import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../constants/config';
import CompanyDetail from '../models/companyDetail';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailService extends CrudService<CompanyDetail,number> {

  constructor(protected http:HttpClient) {
    super(http,`${Config.api.baseUrl}/companyDetail`);
   }
}
