import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormDataService } from '../../../services/formData.service';
import { ROUTE_PATH } from '../../../Routes';

@Component({
  selector: 'app-type-of-cloud-service',
  templateUrl: './type-of-cloud-service.component.html',
  styleUrls: ['./type-of-cloud-service.component.scss']
})

export class TypeOfCloudServiceComponent implements OnInit {
  options: string[];
  selectedOption: string;

  constructor(
    private router: Router,
    private formDataService: FormDataService,
  ) { }

  ngOnInit() {
    this.options = [
      'Software as a Service (SaaS)',
      'Platform as a Service (Paas)',
      'Infrastrucure as a Service (Iaas)'];
    this.selectedOption = this.formDataService.getFormDataByName('typeOfCloudService');
  }

  goNext() {
    this.formDataService.setFormDataByName('typeOfCloudService', this.selectedOption);
    this.router.navigate([ROUTE_PATH.ACCESSMENT, ROUTE_PATH.ABOUT_THE_PRODUCT]);
  }
}
