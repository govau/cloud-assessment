import { Component, OnInit } from '@angular/core';
import { Config } from '../../data/Config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  routePath: any;

  constructor() { }

  ngOnInit() {
    this.routePath = Config.RoutePath;
  }

}
