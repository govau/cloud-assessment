import { Component, OnInit } from '@angular/core';
import { AccessmentReportData } from './classes/AccessmentReportData';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  formData: AccessmentReportData;

  constructor(
    private localStorageService: LocalStorageService
  ) {
  }

  ngOnInit() {
  }

  // todo testing, remove later
  writeLocalStoage() {
    this.formData.dataSecurity = 'None';
    this.localStorageService.set(this.formData);
  }

  readLocalStoage() {
    console.log(this.localStorageService.get());
  }

  clearLocalStoage() {
    this.localStorageService.clear();
    console.log('clearLocalStoage');
  }
}
