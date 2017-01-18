import { Ang2MaterialPage } from './app.po';

describe('ang2-material App', function() {
  let page: Ang2MaterialPage;

  beforeEach(() => {
    page = new Ang2MaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
