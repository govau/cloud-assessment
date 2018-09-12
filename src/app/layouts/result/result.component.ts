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
// import { ReportService } from '../../services/report.service';

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
    // private reportService: ReportService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.assessmentQuestion = this.workFlowService.appData.AssessmentQuestion;
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
    let count = 0;
    this.assessmentQuestion.forEach(x => {
      if (x.Category === categoryName) {
        switch (x.ValueType) {
          case Config.QuestionType.Integer:
            if (+x.AssessmentValue < (+x.RequiredValue - 1)) {
              count++;
            }
            break;
          case Config.QuestionType.OR:
          case Config.QuestionType.XOR:
            if (x.AssessmentValue !== x.RequiredValue) {
              count++;
            }
            break;
        }
      }
    });
    return count;
  }

  CountOrangeByCategory(categoryName: string): number {
    let count = 0;
    this.assessmentQuestion.forEach(x => {
      if (x.Category === categoryName) {
        switch (x.ValueType) {
          case Config.QuestionType.Integer:
            if (+x.AssessmentValue === (+x.RequiredValue - 1)) {
              count++;
            }
            break;
        }
      }
    });
    return count;
  }

  CountGreenByCategory(categoryName: string): number {
    let count = 0;
    this.assessmentQuestion.forEach(x => {
      if (x.Category === categoryName) {
        switch (x.ValueType) {
          case Config.QuestionType.Integer:
            if (+x.AssessmentValue > (+x.RequiredValue - 1)) {
              count++;
            }
            break;
          case Config.QuestionType.OR:
          case Config.QuestionType.XOR:
            if (x.AssessmentValue === x.RequiredValue) {
              count++;
            }
            break;
        }
      }
    });
    return count;
  }

  private CalculateSymbol(question: QuestionItem): string {
    let symbol;
    switch (question.ValueType) {
      case Config.QuestionType.Integer:
        if (+question.AssessmentValue < (+question.RequiredValue - 1)) {
          symbol = Config.QuestionResultSymbol.Red;
        } else if (+question.AssessmentValue === (+question.RequiredValue - 1)) {
          symbol = Config.QuestionResultSymbol.Orange;
        } else {
          symbol = Config.QuestionResultSymbol.Green;
        }
        break;
      case Config.QuestionType.OR:
        // If required_value = “Unsure” OR assessed_value then green else red
        if (question.AssessmentValue === 'Unsure') {

        } else {
          symbol = Config.QuestionResultSymbol.Red;
        }
        break;
      case Config.QuestionType.XOR:
        symbol = Config.QuestionResultSymbol.Red;
        break;
    }
    return symbol;
  }
}
