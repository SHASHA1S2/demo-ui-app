import { DemoUiAppPage } from './app.po';

describe('demo-ui-app App', () => {
  let page: DemoUiAppPage;

  beforeEach(() => {
    page = new DemoUiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
