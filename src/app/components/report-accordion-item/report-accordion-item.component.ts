import { Component, OnInit, Input } from '@angular/core';
import QuestionItem from '../../classes/QuestionItem';
import CheckBox from '../../classes/CheckBox';
import { Config } from '../../data/Config';

@Component({
  selector: 'app-report-accordion-item',
  templateUrl: './report-accordion-item.component.html',
  styleUrls: ['./report-accordion-item.component.scss']
})
export class ReportAccordionItemComponent implements OnInit {
  @Input() categoryName: string;
  @Input() redCount: string;
  @Input() orangeCount: string;
  @Input() greenCount: string;
  @Input() questions: QuestionItem[];
  panelExpanded = false;

  constructor() { }

  ngOnInit() {
  }

  panelClicked() {
    this.panelExpanded = !this.panelExpanded;
  }

  backToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  get ariaControlID(): string {
    return `accordion-group-${this.categoryName}`;
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
