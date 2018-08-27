import { Component, OnInit } from '@angular/core';
import { ROUTE_PATH } from '../../Routes';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})
export class NaviComponent implements OnInit {

  public routePath = ROUTE_PATH;

  constructor() { }

  ngOnInit() {
  }

}
