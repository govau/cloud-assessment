import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormDataService } from '../../../services/formData.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { WorkFlowService } from '../../../services/work-flow.service';

@Component({
  selector: 'app-type-of-cloud-service',
  templateUrl: './type-of-cloud-service.component.html',
  styleUrls: ['./type-of-cloud-service.component.scss']
})

export class TypeOfCloudServiceComponent implements OnInit {
  options: string[];
  selectedOption: string;
  @ViewChild('form') form: NgForm;

  constructor(
    private formDataService: FormDataService,
    private localStorageService: LocalStorageService,
    private workFlowService: WorkFlowService,
  ) { }

  ngOnInit() {
    this.options = [
      'Software as a Service (SaaS)',
      'Platform as a Service (Paas)',
      'Infrastrucure as a Service (Iaas)'];
    this.selectedOption = this.formDataService.getFormDataByName('typeOfCloudService');
  }

  goNext() {
    if (this.form.valid) {
      this.formDataService.setFormDataByName('typeOfCloudService', this.selectedOption);
      // this.localStorageService.set(this.formDataService.getFormData());
      this.workFlowService.goNext();
    }
  }
}
