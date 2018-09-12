import { Injectable } from '@angular/core';
// model
import IQuestionItem from '../classes/IQuestionItem';
import GeneralQuestion from "../classes/GeneralQuestion";
// config
import { Config } from '../data/Config';
import QuestionItem from '../classes/QuestionItem';

@Injectable()
export class WorkFlowService {
  private allQuestions: IQuestionItem[];
  public currentIndex: number;
  public hasStarted: boolean;

  private generalQuestion: GeneralQuestion;

  constructor(
  ) {
    this.reset();
    this.hasStarted = false;
    this.generalQuestion = new GeneralQuestion();
  }

  get GetGeneralQuestion(): GeneralQuestion {
    return this.generalQuestion;
  }

  get result(): any {
    return {
      g: this.generalQuestion,
      a: this.allQuestions
    };
  }

  // get result(): IQuestionItem[] {
  //   return this.allQuestions;
  // }

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
    // Config.QuestionData.forEach(q => {
    //   if (q.ValueType === 'OR') {
    //     q.AssessmentValue = [];
    //     q.ValueOptions.split(',').forEach(name =>
    //       q.AssessmentValue.push(new CheckBox(name, false))
    //     );
    //   }
    // });
    // this.allQuestions = Config.QuestionData.map(x => Object.assign({}, x));
    this.allQuestions = Config.QuestionData.map<QuestionItem>(x => Object.assign({}, new QuestionItem(x)));
    this.generalQuestion = new GeneralQuestion();
  }

  public restore(data: any) {
    this.generalQuestion = data.g;
    this.allQuestions = data.a;
    // todo resume index from local storage
    // let resumeIndex = 0;
    // data.forEach(d => {
    //   console.log(d);
    //   if (d.AssessmentValue === "") { return; }
    //   else {
    //     resumeIndex++;
    //   }
    // });
    // console.log(resumeIndex);
    // this.currentIndex = 7;
  }

  private checkRules(): boolean {
    // todo if condition modified -> clear all AssessmentValue after it

    // todo conditional question
    // if (this.getCurrent().Condition.trim()) {
    //   if (this.allQuestions[0].AssessmentValue === 'Saas') {
    //     const options = [1];
    //     return options.indexOf(this.currentIndex) > -1;
    //   }
    // }

    return false;
  }
}
