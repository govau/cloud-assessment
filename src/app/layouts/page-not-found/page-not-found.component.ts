import { Component, OnInit } from '@angular/core';
import { Config } from '../../data/Config';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent implements OnInit {
  routePath: any;

  constructor() { }

  ngOnInit() {
    this.routePath = Config.RoutePath;
  }

}
