import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

// const WORKFLOW = [
//   HOME: 'home',
//   ACCESSMENT: 'accessment',
//   ABOUT: 'about',

//   // Accessment questions
//   DATA_SECURITY: 'data-security',
//   TYPE_OF_CLOUD_SERVICE: 'type_of_cloud_service',

//   RESULT: 'result'
// ];

@Component({
  selector: 'app-question-direction-button',
  templateUrl: './question-direction-button.component.html',
  styleUrls: ['./question-direction-button.component.scss']
})
export class QuestionDirectionButtonComponent implements OnInit {
  @Output() goNextButtonClick = new EventEmitter();

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  goPrevious() {
    this.location.back();
  }

  goNext() {
    console.log('go next start...');
    this.goNextButtonClick.emit();
    console.log('go next complete...');
  }


}
