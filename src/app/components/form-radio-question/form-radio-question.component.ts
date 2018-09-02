import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-radio-question',
  templateUrl: './form-radio-question.component.html',
  styleUrls: ['./form-radio-question.component.scss']
})
export class FormRadioQuestionComponent implements OnInit {
  @Input() options: any;
  @Input() modelData: number;
  @Input() showError: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.showError = false;
  }
}
