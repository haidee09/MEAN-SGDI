import { SistemaDocumentacionDigPage } from './app.po';

describe('sistema-documentacion-dig App', () => {
  let page: SistemaDocumentacionDigPage;

  beforeEach(() => {
    page = new SistemaDocumentacionDigPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
