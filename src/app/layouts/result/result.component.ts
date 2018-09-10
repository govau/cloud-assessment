import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// config
import { Config } from "../../data/Config";
// model
import IQuestionItem from '../../classes/IQuestionItem';
import UIReportItem from "../../classes/UIReportItem";
// service
import { WorkFlowService } from '../../services/work-flow.service';
import { ReportService } from "../../services/report.service";
// data
import { ResultData } from "../../data/result-data";

import { CheckBox } from "../../classes/CheckBox";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  result: IQuestionItem[];
  downloadJsonHref: any;
  // UIReport: ReportService;

  private _data: IQuestionItem[];

  constructor(
    private workFlowService: WorkFlowService,
    private reportService: ReportService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.result = this.workFlowService.result;
    this.generateDownloadJsonUri();

    // todo
    // this._data = ResultData;
    this._data = this.workFlowService.result;
  }

  generateDownloadJsonUri() {
    const theJSON = JSON.stringify(this.result);
    const uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
    this.downloadJsonHref = uri;
  }

  backToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  printReport() {
    window.print();
  }

  // todo refractoring
  get Categories(): string[] {
    const categories = [];
    this._data.forEach(x => {
      if (categories.indexOf(x.Category) === -1 && x.Category != 'General' && x.Category.trim() != '') {
        categories.push(x.Category);
      }
    });
    return categories;
  }

  CountRedByCategory(categoryName: string): number {
    let count = 0;
    this._data.forEach(x => {
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
    this._data.forEach(x => {
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
    this._data.forEach(x => {
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

  GetQuestionsByCategory(categoryName: string) {
    const questions = [];
    this._data.forEach(x => {
      if (x.Category === categoryName) {
        questions.push(x);
      }
    });
    return questions;
  }

  private CalculateSymbol(question: IQuestionItem): string {
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

  GetXORAssessmentValue(data: CheckBox[]): string {
    let result = [];
    data.forEach(element => {
      if (element.checked) {
        result.push(element.name);
      }
    });
    return result.join(',');
  }

}
