import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../constants/config';
import Feature from '../models/feature';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class FeatureService extends CrudService<Feature,number> {

  constructor(protected http:HttpClient) {
    super(http,`${Config.api.baseUrl}/feature`);
   }
}
