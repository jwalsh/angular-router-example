import { AngularRouterExamplePage } from './app.po';

describe('angular-router-example App', () => {
  let page: AngularRouterExamplePage;

  beforeEach(() => {
    page = new AngularRouterExamplePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
