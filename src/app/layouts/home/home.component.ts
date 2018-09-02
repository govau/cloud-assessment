import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONFIG_DATA } from '../../data/ConfigData';
import { LocalStorageService } from '../../services/local-storage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Cloud Assessment';

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit() {
  }

  startAccessment() {
    const localData = this.localStorageService.get();
    if (localData === null) {
      this.router.navigateByUrl(CONFIG_DATA.ROUTE_PATH.ACCESSMENT);
    } else {
      // open modal to load data
      this.router.navigateByUrl(CONFIG_DATA.ROUTE_PATH.ACCESSMENT);
    }
  }

  learnMore() {
    this.router.navigateByUrl(CONFIG_DATA.ROUTE_PATH.ABOUT);
  }
}
