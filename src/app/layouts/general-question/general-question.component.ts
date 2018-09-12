import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// model
import GeneralQuestion from "../../classes/GeneralQuestion";
// config
import { Config } from '../../data/Config';
// service
import { WorkFlowService } from "../../services/work-flow.service";
import { LocalStorageService } from "../../services/local-storage.service";

@Component({
  selector: 'app-general-question',
  templateUrl: './general-question.component.html',
  styleUrls: ['./general-question.component.scss']
})
export class GeneralQuestionComponent implements OnInit {
  formSubmitted: boolean;
  generalQuestion: GeneralQuestion;
  @ViewChild('myform') form: NgForm;

  constructor(
    private router: Router,
    private workFlowService: WorkFlowService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit() {
    this.formSubmitted = false;
    this.generalQuestion = this.workFlowService.GetGeneralQuestion;
  }

  goNext() {
    if (this.form.valid) {
      this.localStorageService.set(this.workFlowService.result);
      this.router.navigateByUrl(Config.RoutePath.QUESTIONS);
      // 
      // this.currentQuestion = this.workFlowService.Next();
      // if (this.currentQuestion == null) {
      // this.localStorageService.clear();
      // this.workFlowService.reset();
      // this.router.navigateByUrl(Config.RoutePath.RESULT);
      // } else {
      // this.formReset();
      // todo unique url per question
      // this.router.navigateByUrl(Config.RoutePath.QUESTIONS + `/${this.workFlowService.currentIndex + 1}`);
    }
    else {
      this.formSubmitted = true;
    }
  }
}
