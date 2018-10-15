import { browser, by, element } from 'protractor';

export class AssessmentPage {
  navigateTo() {
    return browser.get('/questions');
  }


}
