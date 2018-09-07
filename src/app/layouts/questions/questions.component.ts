import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// config
import { Config } from '../../data/Config';
// model
import IQuestionItem from '../../classes/IQuestionItem';
// service
import { WorkFlowService } from '../../services/work-flow.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  private formSubmitted: boolean;
  currentQuestion: IQuestionItem;
  @ViewChild('myform') form: NgForm;

  constructor(
    private router: Router,
    private workFlowService: WorkFlowService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit() {
    this.currentQuestion = this.workFlowService.getCurrent();
    this.formSubmitted = false;
  }

  get subTitle(): string {
    let subtitle = '';
    subtitle += this.currentQuestion.Category ? this.currentQuestion.Category + ' > ' : '';
    subtitle += this.currentQuestion.SubCategory ? this.currentQuestion.SubCategory + ' > ' : '';
    subtitle += this.currentQuestion.Quality ? this.currentQuestion.Quality : '';
    return subtitle;
  }

  get processBar(): string {
    return (this.workFlowService.index + 1) + ' of ' + this.workFlowService.count;
  }

  get processBarProgress(): number {
    return Math.floor((this.workFlowService.index + 1) / this.workFlowService.count * 100);
  }

  get radioButtonListOptions(): any {
    return Config.RatingOptions;
  }

  get showPrevious(): boolean {
    return !this.workFlowService.isFirst;
  }

  get showError(): boolean {
    return this.form.invalid && this.formSubmitted;
  }

  get checkValidity(): boolean {
    const result = this.currentQuestion.AssessmentValue.filter(x => x.checked).length === 0;
    return result;
  }

  goPrevious() {
    this.formReset();
    // todo unique url per question
    // this.router.navigateByUrl(Config.RoutePath.QUESTIONS + `/${this.workFlowService.currentIndex}`);

    this.currentQuestion = this.workFlowService.Previous();
  }

  goNext() {
    if (this.form.valid) {
      this.localStorageService.set(this.workFlowService.result);
      this.currentQuestion = this.workFlowService.Next();
      if (this.currentQuestion == null) {
        this.localStorageService.clear();
        // this.workFlowService.reset();
        this.router.navigateByUrl(Config.RoutePath.RESULT);
      } else {
        this.formReset();
        // todo unique url per question
        // this.router.navigateByUrl(Config.RoutePath.QUESTIONS + `/${this.workFlowService.currentIndex + 1}`);
      }
    } else {
      this.formSubmitted = true;
    }
  }

  private formReset() {
    this.formSubmitted = false;
  }
}
