import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// config
import { CONFIG_DATA } from '../../data/ConfigData';
// model
import QuestionItem from '../../classes/QuestionItem';
// service
import { QuestionDataService } from '../../services/question-data.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  currentQuestion: QuestionItem;
  @ViewChild('myform') form: NgForm;
  private formSubmitted: boolean;

  constructor(
    private router: Router,
    private questionDataService: QuestionDataService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit() {
    this.currentQuestion = this.questionDataService.getCurrent();
    this.formSubmitted = false;
  }

  get subTitle(): string {
    let subtitle = '';
    subtitle += this.currentQuestion.category ? this.currentQuestion.category + ' > ' : '';
    subtitle += this.currentQuestion.subCategory ? this.currentQuestion.subCategory + ' > ' : '';
    subtitle += this.currentQuestion.quality ? this.currentQuestion.quality : '';
    return subtitle;
  }

  get processBar(): string {
    return (this.questionDataService.index + 1) + ' of ' + this.questionDataService.count;
  }

  get radioButtonListOptions(): any {
    return CONFIG_DATA.RatingOptions;
  }

  get showPrevious(): boolean {
    return !this.questionDataService.isFirst;
  }

  get showError(): boolean {
    return this.form.invalid && this.formSubmitted;
  }

  goPrevious() {
    this.formReset();
    this.currentQuestion = this.questionDataService.Previous();
  }

  goNext() {
    if (this.form.valid) {
      this.localStorageService.set(this.questionDataService.all);
      this.currentQuestion = this.questionDataService.Next();
      if (this.currentQuestion == null) {
        this.localStorageService.clear();
        this.questionDataService.reset();
        this.router.navigateByUrl(CONFIG_DATA.ROUTE_PATH.RESULT);
      } else {
        this.formReset();
      }
      // if (this.questionDataService.isLast) {
      //   this.localStorageService.clear();
      //   this.router.navigateByUrl(CONFIG_DATA.ROUTE_PATH.RESULT);
      // } else {
      //   this.localStorageService.set(this.questionDataService.all);
      //   this.currentQuestion = this.questionDataService.Next();
      //   this.formReset();
      // }
    } else {
      this.formSubmitted = true;
    }

    // if (this.form.valid) {
    //   if (this.questionDataService.isLast) {
    //     this.localStorageService.clear();
    //     this.router.navigateByUrl(CONFIG_DATA.ROUTE_PATH.RESULT);
    //   } else {
    //     this.localStorageService.set(this.questionDataService.all);
    //     this.currentQuestion = this.questionDataService.Next();
    //     this.formReset();
    //   }
    // } else {
    //   this.formSubmitted = true;
    // }
  }

  private formReset() {
    this.formSubmitted = false;
  }
}
