import { Component, OnInit } from '@angular/core';
import { CONFIG_DATA } from '../../data/ConfigData';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})
export class NaviComponent implements OnInit {

  public routePath = CONFIG_DATA.ROUTE_PATH;

  constructor() { }

  ngOnInit() {
  }

}
