import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { FormDataService } from '../../../services/formData.service';
import { ROUTE_PATH } from '../../../Routes';

@Component({
  selector: 'app-data-security',
  templateUrl: './data-security.component.html',
  styleUrls: ['./data-security.component.scss']
})
export class DataSecurityComponent implements OnInit {
  options: string[];
  selectedOption: string;
  @ViewChild('form') form: NgForm;

  constructor(
    private router: Router,
    private formDataService: FormDataService,
  ) { }

  ngOnInit() {
    this.options = ['None', 'Protected', 'Confidential', 'Secret', 'Top secret'];
    this.selectedOption = this.formDataService.getFormDataByName('dataSecurity');
  }

  goNext() {
    if (this.form.valid) {
      console.log('form valid');
      this.formDataService.setFormDataByName('dataSecurity', this.selectedOption);
      this.router.navigate([ROUTE_PATH.ACCESSMENT, ROUTE_PATH.TYPE_OF_CLOUD_SERVICE]);
    } else {
      console.log('a form invalid');
    }
  }
}
