import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// model
import QuestionItem from '../../classes/QuestionItem';
// service
import { QuestionDataService } from '../../services/question-data.service';
// todo Observable
import { Observable } from "rxjs/Rx"

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  currentQuestion: QuestionItem;
  currentIndex
  private options: number[];
  @ViewChild('myform') form: NgForm;
  showError: boolean;
  showPrevious: boolean;

  constructor(
    private questionDataService: QuestionDataService
  ) { }

  ngOnInit() {
    this.currentQuestion = this.questionDataService.get();
    this.options = [0, 1, 2, 3, 4, 5, 6];
    this.showError = false;
  }

  goPrevious() {
    this.showError = false;
    this.questionDataService.getPrevious();
    this.currentQuestion = this.questionDataService.get();
  }

  goNext() {
    this.showError = true;
    console.log('form valid -> ' + this.form.valid);
    if (this.form.valid) {
      this.questionDataService.getNext();
      this.currentQuestion = this.questionDataService.get();
      this.showError = false;
    }
  }

  // todo currentQuestion to read only
  // public currentQuestion(){
  //   return this.questionDataService.get();
  // }
}
