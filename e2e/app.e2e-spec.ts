import { TttMaterialPage } from './app.po';

describe('ttt-material App', function() {
  let page: TttMaterialPage;

  beforeEach(() => {
    page = new TttMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
