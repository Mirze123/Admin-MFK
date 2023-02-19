import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../constants/config';
import SliderDetail from '../models/sliderDetail';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class SliderDetailService extends CrudService<SliderDetail,number> {

  constructor(protected http:HttpClient) {
    super(http,`${Config.api.baseUrl}/sliderDetail`);
   }
}
