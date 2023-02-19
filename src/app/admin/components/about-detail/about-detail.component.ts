import { Component, OnInit } from '@angular/core';
import AboutDetail from 'src/app/models/aboutDetail';
import { AboutDetailService } from 'src/app/services/about-detail.service';

@Component({
  selector: 'app-about-detail',
  templateUrl: './about-detail.component.html',
  styleUrls: ['./about-detail.component.css']
})
export class AboutDetailComponent implements OnInit {
  model: AboutDetail = new AboutDetail();
  dataList?: AboutDetail[];
  constructor(private  aboutDetailService:AboutDetailService){

  }
  ngOnInit(): void {
    this.getAllData();
  }

  public getFormData(data: any) {
    this.save();
  }

  private save() {
    const res = this.aboutDetailService.add(this.model).subscribe((result) => {
      this.getAllData();
    });
  }

  private getAllData() {
    const data = this.aboutDetailService.getAll().subscribe((result) => {
      this.model = result[0];
      console.log(result);
    });
  }


}
