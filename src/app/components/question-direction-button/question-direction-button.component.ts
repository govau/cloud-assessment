import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-question-direction-button',
  templateUrl: './question-direction-button.component.html',
  styleUrls: ['./question-direction-button.component.scss']
})
export class QuestionDirectionButtonComponent implements OnInit {
  @Output() goNextButtonClick = new EventEmitter();
  @Output() goPreviousButtonClick = new EventEmitter();
  @Input() showPrevious: boolean;

  constructor(
  ) { }

  ngOnInit() {
  }

  goPrevious() {
    this.goPreviousButtonClick.emit();
  }

  goNext() {
    this.goNextButtonClick.emit();
  }
}
