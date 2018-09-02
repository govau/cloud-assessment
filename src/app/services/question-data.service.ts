import { Injectable } from '@angular/core';
import QuestionItem from '../classes/QuestionItem';
import { QuestionData } from '../data/QuestionData';

@Injectable()
export class QuestionDataService {
  public currentIndex: number;
  private allQuestions: QuestionItem[];

  constructor() {
    this.reset();
  }

  get all(): QuestionItem[] {
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

  public getCurrent(): QuestionItem {
    return this.allQuestions[this.currentIndex];
  }

  public Next(): QuestionItem {
    // if (!this.isLast) {
    //   this.currentIndex++;
    //   return this.getCurrent();
    // } else {
    //   return null;
    // }

    if (!this.isLast) {
      this.currentIndex++;
      // console.log(this.currentIndex);
      const q = this.getCurrent();
      if (this.checkRules()) {
        return this.Next();
      } else {
        return q;
        // if (this.isLast) {
        //   console.log('^%%^^%$&^%^&');
        //   return null;
        // } else {
        //   return q;
        // }
      }
    } else {
      return null;
    }
  }

  public Previous(): QuestionItem {
    // if (!this.isFirst) {
    //   this.currentIndex--;
    //   return this.getCurrent();
    // } else {
    //   return null;
    // }

    if (!this.isFirst) {
      this.currentIndex--;
      console.log(this.currentIndex);
      const q = this.getCurrent();
      if (this.checkRules()) {
        console.log('has rule');
        return this.Previous();
      } else {
        console.log('no rule');
        return q;
      }
    } else {
      return null;
    }
  }

  public reset() {
    this.currentIndex = 0;
    this.allQuestions = QuestionData.map(x => Object.assign({}, x));
  }

  public restore(data: any) {
    this.allQuestions = data;
  }

  private checkRules(): boolean {
    if (this.currentIndex === 3) {
      if (this.allQuestions[0].assessmentValue === 'Saas') {
        return true;
      }
    }

    if (this.currentIndex === 6) {
      if (this.allQuestions[0].assessmentValue === 'Saas') {
        return true;
      }
    }
    return false;
  }
}
