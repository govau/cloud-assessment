import { Component, OnInit } from '@angular/core';
import { Config } from '../../data/Config';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss']
})
export class SiteFooterComponent implements OnInit {
  public routePath = Config.RoutePath;

  constructor() { }

  ngOnInit() {
  }

}
