import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { FormDataService } from '../../../services/formData.service';
import { ROUTE_PATH } from '../../../Routes';

@Component({
  selector: 'app-about-the-product',
  templateUrl: './about-the-product.component.html',
  styleUrls: ['./about-the-product.component.scss']
})
export class AboutTheProductComponent implements OnInit {
  productName: string;
  numberOfUser: number;
  productBrief: string;
  @ViewChild('form') form: NgForm;

  constructor(
    private router: Router,
    private formDataService: FormDataService,
  ) { }

  ngOnInit() {
    this.productName = this.formDataService.getFormDataByName('productName');
    this.numberOfUser = this.formDataService.getFormDataByName('numberOfUser');
    this.productBrief = this.formDataService.getFormDataByName('productBrief');
  }

  goNext() {
    if (this.form.valid) {
      console.log('AboutTheProductComponent form valid');
      this.formDataService.setFormDataByName('productName', this.productName);
      this.formDataService.setFormDataByName('numberOfUser', this.numberOfUser);
      this.formDataService.setFormDataByName('productBrief', this.productBrief);
      this.formDataService.clearLocalStorage();
      // this.formDataService.setProductName(this.productName);
      // this.formDataService.setNumberOfUser(this.numberOfUser);
      // this.formDataService.setProductBrief(this.productBrief);
      this.router.navigate([ROUTE_PATH.ACCESSMENT, ROUTE_PATH.HOME]);
    } else {
      console.log('AboutTheProductComponent form invalid');
    }
  }
}
