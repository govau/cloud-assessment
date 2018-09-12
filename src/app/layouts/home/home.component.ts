import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../../data/Config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Cloud Assessment';
  public routePath = Config.RoutePath;
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  startAssessment() {
    this.router.navigateByUrl(Config.RoutePath.ASSESSMENT);
  }

  learnMore() {
    this.router.navigateByUrl(Config.RoutePath.ABOUT);
  }
}
