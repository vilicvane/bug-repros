import { RouteMatcherTestPage } from './app.po';

describe('route-matcher-test App', () => {
  let page: RouteMatcherTestPage;

  beforeEach(() => {
    page = new RouteMatcherTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
