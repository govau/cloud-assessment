import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// config
import { Config } from '../../data/Config';
// service
import { WorkFlowService } from '../../services/work-flow.service';
import CheckBox from '../../classes/CheckBox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Cloud Assessment';
  routePath: any;
  showModal: boolean;
  reCAPTCHAConfig: any;
  declarativeFormCaptchaValue: string;

  constructor(
    private router: Router,
    private workFlowService: WorkFlowService
  ) { }

  ngOnInit() {
    this.showModal = false;
    this.reCAPTCHAConfig = Config.reCAPTCHA;
    this.routePath = Config.RoutePath;
  }

  startAssessment() {
    this.workFlowService.start();
    if (this.workFlowService.localStorageExist) {
        this.showModal = true;
    } else {
        this.close();
    }
  }

  resume() {
    this.workFlowService.localStorageRestore();
    // Go to last open question when local storage is loaded
  }

  startAgain() {
    this.workFlowService.localStorageClear();
  }

  close() {
    if (this.workFlowService.appData.GeneralQuestion.ServiceName !== undefined
        && this.workFlowService.appData.GeneralQuestion.ServiceName !== ''
        && this.workFlowService.appData.GeneralQuestion.NumberOfUsers !== undefined
        && this.workFlowService.appData.GeneralQuestion.NumberOfUsers !== ''
        && this.workFlowService.appData.GeneralQuestion.ServicePurpose !== undefined
        && this.workFlowService.appData.GeneralQuestion.ServicePurpose !== '') {
        const savedIndex = this.workFlowService.appData.AssessmentQuestion.findIndex(x => {
            let result = false;
            switch (x.ValueType) {
                case Config.QuestionType.Integer:
                case Config.QuestionType.XOR:
                    result = x.AssessmentValue === '';
                    break;
                case Config.QuestionType.OR:
                    result = (<CheckBox[]>x.AssessmentValue).findIndex(element => {
                        return element.checked;
                    }) === -1;
                    break;
            }
            return result;
        });
        if (savedIndex === 0) {
            this.router.navigateByUrl(Config.RoutePath.GENERALQUESTION);
        } else {
            this.workFlowService.setIndex(savedIndex - 1);
            this.router.navigateByUrl(Config.RoutePath.QUESTIONS);
        }
    } else {
        this.router.navigateByUrl(Config.RoutePath.GENERALQUESTION);
    }
  }

  resolved(captchaResponse: string) {
    this.workFlowService.captchaResponse = captchaResponse;
  }
}
