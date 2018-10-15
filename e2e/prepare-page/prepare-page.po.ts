import { browser, by, element } from 'protractor';

export class PreparePage {
  navigateTo() {
    return browser.get('/how-to-prepare');
  }

  //Prepare Page
  getPrepareButton() {
    return element(by.css('[ng-reflect-router-link="how-to-prepare"]'));
  }

  getPrepareTitleText() {
    return element(by.css('app-how-to-prepare h2')).getText();
  }

}
