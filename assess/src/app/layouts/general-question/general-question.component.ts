import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// model
import GeneralQuestion from '../../classes/GeneralQuestion';
// config
import { Config } from '../../data/Config';
// service
import { WorkFlowService } from '../../services/work-flow.service';
import { LocalStorageService } from '../../services/local-storage.service';

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
    this.generalQuestion = this.workFlowService.appData.GeneralQuestion;
  }

  goNext() {
    if (this.form.valid) {
      // window.scroll(0, 0);
      this.localStorageService.set(this.workFlowService.appData);
      this.router.navigateByUrl(Config.RoutePath.QUESTIONS);
    } else {
      this.formSubmitted = true;
    }
    this.jumpToPage('progressbar');
  }

  get processBar(): string {
    return (1) + ' of ' + (this.workFlowService.count + 1);
  }

  jumpToPage(data: string) {
    const x = document.querySelector('#' + data);
    if (x) {
      x.scrollIntoView();
    }
  }
}
