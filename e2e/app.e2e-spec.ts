import { TypescriptDecoratorsPage } from './app.po';

describe('typescript-decorators App', () => {
  let page: TypescriptDecoratorsPage;

  beforeEach(() => {
    page = new TypescriptDecoratorsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
