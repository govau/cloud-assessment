import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from './services/formData.service';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  @Input() formData;

  constructor(
    private formDataService: FormDataService,
    private localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
  }

  readLocalStoage() {
    console.log(this.localStorageService.get());
  }

  clearLocalStoage() {
    console.log('clearLocalStoage');
    this.formDataService.clearLocalStorage();
  }
}
