import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  ngOnInit(): void {
    this.loadScripts(this.urlArray);
  }

  public loadScripts(urls: Array<string>) {
    urls.forEach((url) => {
      console.log('preparing to load...');
      let node = document.createElement('script');
      node.src = url;
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('body')[0].appendChild(node);
    });
  }
  url: string = '../../../assets/js/pcoded.min.js';
  urlArray: Array<string> = [this.url];
}
