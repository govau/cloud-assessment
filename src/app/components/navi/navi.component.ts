import { Component, OnInit } from '@angular/core';
import { Config } from '../../data/Config';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html'
})
export class NaviComponent implements OnInit {

  public routePath = Config.RoutePath;

  constructor() { }

  ngOnInit() {
  }

}
