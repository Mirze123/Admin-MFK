import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutDetailModule } from './about-detail/about-detail.module';
import { CategoryModule } from './category/category.module';
import { CompanyDetailModule } from './company-detail/company-detail.module';
import { CustomerModule } from './customer/customer.module';
import { FeatureModule } from './feature/feature.module';
import { ProductModule } from './product/product.module';
import { SliderDetailModule } from './slider-detail/slider-detail.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutDetailModule,
    CategoryModule,
    CompanyDetailModule,
    CustomerModule,
    FeatureModule,
    ProductModule,
    SliderDetailModule,
  ]
})
export class ComponentsModule { }
