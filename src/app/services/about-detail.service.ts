import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../constants/config';
import AboutDetail from '../models/aboutDetail';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class AboutDetailService extends CrudService<AboutDetail,number> {

  constructor(protected http:HttpClient) { 
    super(http,`${Config.api.baseUrl}/about`);
  }
}
