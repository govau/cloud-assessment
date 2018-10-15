import { HomePage } from "./home-page.po";

describe('Home Page', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  //Home Page
  it('should display a home button', () => {
    page.navigateTo();
    expect(page.getHomeButton().getText()).toEqual('Home');
  });

  it('should route to the home page when the home button is clicked', () => {
    page.navigateTo();
    page.getHomeButton().click();
    expect(page.getHomeTitleText()).toEqual('Start an assessment');
  });

  /*  it('should route to the general questions page when the start cloud assessment button is clicked', () => {
      page.navigateTo();
      page.getStartAssessmentButton().click();
      expect(page.getGeneralQuestionTitle()).toEqual('About the cloud service');
    });*/

});
