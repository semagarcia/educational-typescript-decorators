import { TsPage } from './app.po';

describe('ts App', () => {
  let page: TsPage;

  beforeEach(() => {
    page = new TsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
