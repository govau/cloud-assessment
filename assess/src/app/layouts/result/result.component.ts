import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
// config
import { Config } from '../../data/Config';
// model
import QuestionItem from '../../classes/QuestionItem';
import GeneralQuestion from '../../classes/GeneralQuestion';
import CheckBox from '../../classes/CheckBox';
// service
import { WorkFlowService } from '../../services/work-flow.service';
import { SubmitServiceService } from '../../services/submit-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  assessmentDate: number = Date.now();
  downloadJsonHref: any;
  assessmentQuestion: QuestionItem[];
  generalQuestion: GeneralQuestion;

  constructor(
    private workFlowService: WorkFlowService,
    private submitServiceService: SubmitServiceService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.assessmentQuestion = this.workFlowService.appData.AssessmentQuestion.filter(x => x.AssessmentValue);
    this.generalQuestion = this.workFlowService.appData.GeneralQuestion;
  }

  get ServiceName(): string {
    return this.generalQuestion.ServiceName;
  }

  get NumberOfUsers(): string {
    return this.generalQuestion.NumberOfUsers;
  }

  get CloudModel(): string {
    const temp = this.assessmentQuestion.find(d => d.Category === 'General' && d.Quality === 'Cloud model');
    return temp.AssessmentValue;
  }

  get ServicePurpose(): string {
    return this.generalQuestion.ServicePurpose;
  }

  get downloadUri(): SafeUrl {
    const theJSON = JSON.stringify(this.assessmentQuestion);
    const uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
    return uri;
  }

  backToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  jumpToPage(data: string) {
    const x = document.querySelector('#' + data);
    if (x) {
      x.scrollIntoView();
    }
  }

  printReport() {
    window.print();
  }

  // todo refractoring
  get Categories(): string[] {
    return this.assessmentQuestion.map(x => x.Category).filter((value, index, self) => value !== 'General' && self.indexOf(value) === index);
  }

  GetXORAssessmentValue(data: CheckBox[]): string {
    return data.filter(x => x.checked).map(x => x.name).join(',');
  }

  GetQuestionsByCategory(categoryName: string) {
    return this.assessmentQuestion.filter(x => x.Category === categoryName);
  }

  CountRedByCategory(categoryName: string): number {
    return this.assessmentQuestion
      .filter(x => x.Category === categoryName
        && this.CalculateSymbol(x) === Config.QuestionResultSymbol.Red)
      .length;
  }

  CountOrangeByCategory(categoryName: string): number {
    return this.assessmentQuestion
      .filter(x => x.Category === categoryName
        && this.CalculateSymbol(x) === Config.QuestionResultSymbol.Orange)
      .length;
  }

  CountGreenByCategory(categoryName: string): number {
    return this.assessmentQuestion
      .filter(x => x.Category === categoryName
        && this.CalculateSymbol(x) === Config.QuestionResultSymbol.Green)
      .length;
  }

  private CalculateSymbol(question: QuestionItem): string {
    switch (question.ValueType) {
      case Config.QuestionType.Integer:
        if (question.AssessmentValue === Config.QuestionExtraOptions.NA) {
          return Config.QuestionResultSymbol.Green;
        }

        if (question.AssessmentValue === Config.QuestionExtraOptions.Unsure) {
          return Config.QuestionResultSymbol.Orange;
        }

        if (+question.AssessmentValue >= +question.RequiredValue) {
          return Config.QuestionResultSymbol.Green;
        } else if (+question.AssessmentValue === +question.RequiredValue - 1) {
          return Config.QuestionResultSymbol.Orange;
        } else if (+question.AssessmentValue < +question.RequiredValue - 1) {
          return Config.QuestionResultSymbol.Red;
        } else {
          return Config.QuestionResultSymbol.Red;
        }
      case Config.QuestionType.XOR:
        if (question.AssessmentValue === Config.QuestionExtraOptions.NA) {
          return Config.QuestionResultSymbol.Green;
        }

        if (question.AssessmentValue === Config.QuestionExtraOptions.Unsure) {
          return Config.QuestionResultSymbol.Orange;
        }

        if (question.RequiredValue === '') {
          return Config.QuestionResultSymbol.Green;
        } else {
          const requiredValues = question.RequiredValue.split(',');
          const assessmentValues = question.AssessmentValue.split(',');
          if (assessmentValues.filter(element => requiredValues.indexOf(element) !== -1).length > 0) {
            return Config.QuestionResultSymbol.Green;
          } else {
            return Config.QuestionResultSymbol.Red;
          }
        }
      case Config.QuestionType.OR:
        const requiredValuesofOR = question.RequiredValue.split(',');
        const selectedOptions = (<Array<CheckBox>>question.AssessmentValue).filter(x => x.checked).map(x => x.name);
        if (selectedOptions.filter(element => element === Config.QuestionExtraOptions.NA).length > 0) {
          return Config.QuestionResultSymbol.Green;
        }

        if (selectedOptions.filter(element => element === Config.QuestionExtraOptions.Unsure).length > 0) {
          return Config.QuestionResultSymbol.Orange;
        }

        if (question.RequiredValue === '') {
          return Config.QuestionResultSymbol.Green;
        }

        if (selectedOptions.filter(element => requiredValuesofOR.indexOf(element) !== -1).length > 0) {
          return Config.QuestionResultSymbol.Green;
        }
        return Config.QuestionResultSymbol.Red;
      default:
        return Config.QuestionResultSymbol.Red;
    }
  }
}
