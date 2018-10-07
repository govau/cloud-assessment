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
  captchaResponse: string;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  reset() {
    this.currentAssessmentIndex = 0;
    this.appDataModel = new AppDataModel();
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
      return this.checkRules(this.currentAssessmentIndex) ? this.current() : this.Next();
    } else {
      return undefined;
    }
  }

  Previous(): QuestionItem {
    if (!this.isFirst) {
      this.currentAssessmentIndex--;
      return this.checkRules(this.currentAssessmentIndex) ? this.current() : this.Previous();
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

  private checkRules(rowIndex: number): boolean {

    let result = true;
    const asd_certified_index = (18 - 2);
    const IRAP_assessment_index = (19 - 2);
    const cloud_model_index = (3 - 2);

    switch (rowIndex) {
      case (19 - 2):
        result = this.appDataModel.AssessmentQuestion[asd_certified_index].AssessmentValue &&
          (this.appDataModel.AssessmentQuestion[asd_certified_index].AssessmentValue.trim() === 'Not certified' ||
            this.appDataModel.AssessmentQuestion[asd_certified_index].AssessmentValue.trim() === Config.QuestionExtraOptions.NA ||
            this.appDataModel.AssessmentQuestion[asd_certified_index].AssessmentValue.trim() === Config.QuestionExtraOptions.Unsure);
        break;
      case (20 - 2):
        result = this.appDataModel.AssessmentQuestion[IRAP_assessment_index].AssessmentValue &&
          (this.appDataModel.AssessmentQuestion[IRAP_assessment_index].AssessmentValue.trim() === 'No' ||
            this.appDataModel.AssessmentQuestion[asd_certified_index].AssessmentValue.trim() === Config.QuestionExtraOptions.NA ||
            this.appDataModel.AssessmentQuestion[asd_certified_index].AssessmentValue.trim() === Config.QuestionExtraOptions.Unsure);
        break;
      case (21 - 2):
      case (22 - 2):
        // case (25 - 2):
        // case (26 - 2):
        result = this.appDataModel.AssessmentQuestion[cloud_model_index].AssessmentValue &&
          this.appDataModel.AssessmentQuestion[cloud_model_index].AssessmentValue.trim() !== 'Software as a Service (Saas)';
        break;
      // case (27 - 2):
      //   result = this.appDataModel.AssessmentQuestion[cloud_model_index].AssessmentValue &&
      //     (this.appDataModel.AssessmentQuestion[cloud_model_index].AssessmentValue.trim() === 'Infrastructure as a Service (IaaS)' ||
      //       this.appDataModel.AssessmentQuestion[asd_certified_index].AssessmentValue.trim() === Config.QuestionExtraOptions.NA ||
      //       this.appDataModel.AssessmentQuestion[asd_certified_index].AssessmentValue.trim() === Config.QuestionExtraOptions.Unsure);
      //   break;
    }

    return result;
  }
}
