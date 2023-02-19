import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutDetailComponent } from './about-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AboutDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:"",component:AboutDetailComponent}
    ])
  ]
})
export class AboutDetailModule { }
