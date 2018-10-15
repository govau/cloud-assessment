import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/');
  }

  getHomeButton() {
    return element(by.css('[ng-reflect-router-link="./"]'));
  }

  getHomeTitleText() {
    return element(by.css('app-home h2')).getText();
  }

  /*getStartAssessmentButton() {
    return element(by.cssContainingText('button', 'Start cloud assessment'));
  }

  getGeneralQuestionTitle() {
    return element(by.css('app-general-question h2')).getText();
  }*/
}
