import { Injectable } from '@angular/core';
// model
import AppDataModel from '../classes/AppDataModel';
import QuestionItem from '../classes/QuestionItem';
import GeneralQuestion from '../classes/GeneralQuestion';
// config
import { Config } from '../data/Config';
// service
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class WorkFlowService {
  private appDataModel: AppDataModel;
  private hasStarted: boolean;
  private currentAssessmentIndex: number;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  reset() {
    this.currentAssessmentIndex = 0;
    this.appDataModel = new AppDataModel();
    // this.appDataModel.GeneralQuestion = undefined;
    this.appDataModel.GeneralQuestion = new GeneralQuestion();
    this.appDataModel.AssessmentQuestion = Config.QuestionData.map<QuestionItem>(x => Object.assign({}, new QuestionItem(x)));
  }

  start() {
    this.hasStarted = true;
    this.reset();
  }

  stop() {
    this.hasStarted = false;
  }

  get status(): boolean {
    return this.hasStarted;
  }

  get appData(): AppDataModel {
    return this.appDataModel;
  }

  /**
   * assessment questions method
   */
  get isFirst(): boolean {
    return this.currentAssessmentIndex === 0;
  }

  get isLast(): boolean {
    return this.currentAssessmentIndex === (this.appDataModel.AssessmentQuestion.length - 1);
  }

  get count(): number {
    return this.appDataModel.AssessmentQuestion.length;
  }

  get index(): number {
    return this.currentAssessmentIndex;
  }

  setIndex(data: number) {
    this.currentAssessmentIndex = data;
  }

  current(): QuestionItem {
    return this.appDataModel.AssessmentQuestion[this.currentAssessmentIndex];
  }

  Next(): QuestionItem {
    if (!this.isLast) {
      this.currentAssessmentIndex++;
      return this.checkRules() ? this.Next() : this.current();
    } else {
      return undefined;
    }
  }

  Previous(): QuestionItem {
    if (!this.isFirst) {
      this.currentAssessmentIndex--;
      return this.checkRules() ? this.Previous() : this.current();
    } else {
      return undefined;
    }
  }

  /**
   * local storage method
   */
  get localStorageExist(): boolean {
    return this.localStorageService.get() != null;
  }

  localStorageSave() {
    this.localStorageService.set(this.appData);
  }

  localStorageClear() {
    this.localStorageService.clear();
  }

  localStorageRestore() {
    this.appDataModel = <AppDataModel>this.localStorageService.get();
  }

  private checkRules(): boolean {
    const asd_certified_index = 17;
    if (this.appDataModel.AssessmentQuestion[asd_certified_index].AssessmentValue) {
      if (this.index === 18 &&
        this.appDataModel.AssessmentQuestion[asd_certified_index].AssessmentValue.trim() === 'Not certified') {
        return true;
      }

      if (this.index === 19 &&
        this.appDataModel.AssessmentQuestion[asd_certified_index].AssessmentValue.trim() === 'Not certified') {
        return true;
      }
    }

    const cloud_model_index = 1;
    if (this.appDataModel.AssessmentQuestion[cloud_model_index].AssessmentValue) {
      if (this.index === 20 &&
        this.appDataModel.AssessmentQuestion[cloud_model_index].AssessmentValue.trim() === 'Saas') {
        return true;
      }

      if (this.index === 21 &&
        this.appDataModel.AssessmentQuestion[cloud_model_index].AssessmentValue.trim() === 'Saas') {
        return true;
      }

      if (this.index === 25 &&
        (this.appDataModel.AssessmentQuestion[cloud_model_index].AssessmentValue.trim() === 'IaaS' ||
          this.appDataModel.AssessmentQuestion[cloud_model_index].AssessmentValue.trim() === 'PaaS')) {
        return true;
      }

      if (this.index === 26 &&
        (this.appDataModel.AssessmentQuestion[cloud_model_index].AssessmentValue.trim() === 'IaaS' ||
          this.appDataModel.AssessmentQuestion[cloud_model_index].AssessmentValue.trim() === 'PaaS')) {
        return true;
      }

      if (this.index === 27 &&
        this.appDataModel.AssessmentQuestion[cloud_model_index].AssessmentValue.trim() === 'IaaS') {
        return true;
      }

      if (this.index === 39 &&
        (this.appDataModel.AssessmentQuestion[cloud_model_index].AssessmentValue.trim() === 'IaaS' ||
          this.appDataModel.AssessmentQuestion[cloud_model_index].AssessmentValue.trim() === 'PaaS')) {
        return true;
      }
    }

    return false;
  }
}
