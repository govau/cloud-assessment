import { PreparePage } from "./prepare-page.po";

describe('Prepare Page', () => {
  let page: PreparePage;

  beforeEach(() => {
    page = new PreparePage();
  });

  it('should display a prepare button', () => {
    page.navigateTo();
    expect(page.getPrepareButton().getText()).toEqual('Prepare');
  });

  it('should route to the prepare page when the prepare button is clicked', () => {
    page.navigateTo();
    page.getPrepareButton().click();
    expect(page.getPrepareTitleText()).toEqual('Preparing for an assessment');
  });

  it('should display 7 hyperlinks in the Compliance section', () => {
    page.navigateTo();
    let linkCount = element.all(by.css('app-how-to-prepare a'));
    expect(linkCount.count()).toBe(7);
  });

});
