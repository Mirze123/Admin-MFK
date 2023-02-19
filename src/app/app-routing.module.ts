import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';

const routes: Routes = [
  {path:"",component:LayoutComponent,children:[
    {path:"about",loadChildren:()=> import('./admin/components/about-detail/about-detail.module').then(module=>module.AboutDetailModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
