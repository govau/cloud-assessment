import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_PATH } from '../../Routes';
import { LocalStorageService } from '../../services/local-storage.service';
import { FormDataService } from '../../services/formData.service';

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
    private formDataService: FormDataService,
  ) { }

  ngOnInit() {
  }

  startAccessment() {
    const localData = this.localStorageService.get();
    if (localData === null) {
      this.router.navigateByUrl(ROUTE_PATH.ACCESSMENT);
    } else {
      // open modal to load data
      this.formDataService.setFormData(localData);
      this.router.navigateByUrl(ROUTE_PATH.ACCESSMENT);
    }
  }

  learnMore() {
    this.router.navigateByUrl(ROUTE_PATH.ABOUT);
  }
}
