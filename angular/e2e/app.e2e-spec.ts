import { ReportingPage } from './app.po';

describe('reporting App', () => {
  let page: ReportingPage;

  beforeEach(() => {
    page = new ReportingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
