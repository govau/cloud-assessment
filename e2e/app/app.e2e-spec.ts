import { AppPage } from './app.po';

describe('cloud-assessment App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  //Header
  it('should display the app title in the header', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('Cloud Assessment Tool beta');
  });

});
