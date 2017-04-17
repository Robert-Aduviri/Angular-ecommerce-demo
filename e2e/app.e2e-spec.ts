import { EcommerceDemoPage } from './app.po';

describe('ecommerce-demo App', () => {
  let page: EcommerceDemoPage;

  beforeEach(() => {
    page = new EcommerceDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
