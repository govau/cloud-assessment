import { Injectable } from '@angular/core';
import QuestionItem from '../classes/QuestionItem';
import { QuestionData } from '../data/QuestionData';

@Injectable()
export class QuestionDataService {
  private currentIndex: number;
  private allQuestions: QuestionItem[];
  private question: QuestionItem;

  constructor() {
    // this.currentIndex = 0;
    this.resetIndex();
    this.allQuestions = QuestionData;
  }

  public get(): QuestionItem {
    return this.allQuestions[this.currentIndex];
  }

  public getNext() {
    // this.currentIndex++;
    if (this.currentIndex === this.allQuestions.length - 1) {
      console.log('last one then submit');
    } else {
      this.currentIndex++;
      // this.submittedd = false;
    }
  }

  public getPrevious() {
    // this.currentIndex--;
    if (this.currentIndex === 0) {
      console.log('first one then submit');
    } else {
      this.currentIndex--
      // this.submittedd = false;
    }
  }

  public resetIndex() {
    this.currentIndex = 0;
  }
}
