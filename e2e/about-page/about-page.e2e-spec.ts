import { AboutPage } from "./about-page.po";

describe('About Page', () => {
  let page: AboutPage;

  beforeEach(() => {
    page = new AboutPage();
  });

  it('should display an about button in the header', () => {
    page.navigateTo();
    expect(page.getAboutButton().getText()).toEqual('About');
  });

  it('should should display the question What is the Cloud Assessment Tool (CAT)?', () => {
    page.navigateTo();
    expect(page.getAboutQuestionText()).toEqual('What is the Cloud Assessment Tool (CAT)?');
  });

  it('should display text in the paragraphs', () => {
    page.navigateTo();
    expect(page.getAboutParagraphText()).toBeTruthy();
  });

  it('should route to the about page when the about button is clicked', () => {
    page.navigateTo();
    page.getAboutButton().click();
    expect(page.getAboutTitleText()).toEqual('About');
  });

  it('should display 2 hyperlinks in the How long will it take? section', () => {
    page.navigateTo();
    let linkCount = element.all(by.css('app-about a'));
    expect(linkCount.count()).toBe(2);
  });


});
