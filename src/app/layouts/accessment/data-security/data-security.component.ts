import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormDataService } from '../../../services/formData.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { WorkFlowService } from '../../../services/work-flow.service';

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
    private formDataService: FormDataService,
    private localStorageService: LocalStorageService,
    private workFlowService: WorkFlowService,
  ) { }

  ngOnInit() {
    this.options = ['None', 'Protected', 'Confidential', 'Secret', 'Top secret'];
    this.selectedOption = this.formDataService.getFormDataByName('dataSecurity');
  }

  goNext() {
    if (this.form.valid) {
      this.formDataService.setFormDataByName('dataSecurity', this.selectedOption);
      // this.localStorageService.set(this.formDataService.getFormData());
      this.workFlowService.goNext();
    }
  }
}
