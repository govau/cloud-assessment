import { Injectable } from '@angular/core';
// model
import IQuestionItem from '../classes/IQuestionItem';
import { CheckBox } from '../classes/CheckBox';
// config
import { Config } from '../data/Config';

@Injectable()
export class WorkFlowService {
  private allQuestions: IQuestionItem[];
  public currentIndex: number;
  public hasStarted: boolean;

  constructor(
  ) {
    this.reset();
    this.hasStarted = false;
  }

  get result(): IQuestionItem[] {
    return this.allQuestions;
  }

  get isFirst(): boolean {
    return this.currentIndex === 0;
  }

  get isLast(): boolean {
    return (this.currentIndex === (this.allQuestions.length - 1));
  }

  get count(): number {
    return this.allQuestions.length;
  }

  get index(): number {
    return this.currentIndex;
  }

  public getCurrent(): IQuestionItem {
    return this.allQuestions[this.currentIndex];
  }

  public Next(): IQuestionItem {
    if (!this.isLast) {
      this.currentIndex++;
      return this.checkRules() ? this.Next() : this.getCurrent();
    } else {
      return null;
    }
  }

  public Previous(): IQuestionItem {
    if (!this.isFirst) {
      this.currentIndex--;
      return this.checkRules() ? this.Previous() : this.getCurrent();
    } else {
      return null;
    }
  }

  public reset() {
    this.hasStarted = true;
    this.currentIndex = 0;
    Config.QuestionData.forEach(q => {
      if (q.ValueType === 'OR') {
        q.AssessmentValue = [];
        q.ValueOptions.split(',').forEach(name =>
          q.AssessmentValue.push(new CheckBox(name, false))
        );
      }
    });
    this.allQuestions = Config.QuestionData.map(x => Object.assign({}, x));
  }

  public restore(data: IQuestionItem[]) {
    this.allQuestions = data;
  }

  private checkRules(): boolean {
    // todo if condition modified -> clear all AssessmentValue after it

    // todo conditional question
    if (this.getCurrent().Condition.trim()) {
      if (this.allQuestions[0].AssessmentValue === 'Saas') {
        const options = [1];
        return options.indexOf(this.currentIndex) > -1;
      }
    }

    return false;
  }
}
