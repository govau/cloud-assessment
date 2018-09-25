import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(
    private localStorageService: LocalStorageService
  ) {
  }

  ngOnInit() {
  }

  readLocalStoage() {
    console.log(this.localStorageService.get());
  }

  clearLocalStoage() {
    console.log('clearLocalStoage');
    this.localStorageService.clear();
  }
}
