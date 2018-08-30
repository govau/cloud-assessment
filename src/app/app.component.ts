import { Component, OnInit } from '@angular/core';
import { AccessmentReportData } from './classes/AccessmentReportData';
import { FormDataService } from './services/formData.service';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  formData: AccessmentReportData;

  constructor(
    private formDataService: FormDataService,
    private localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
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
