import { Practica6GalleryPage } from './app.po';

describe('practica6-gallery App', () => {
  let page: Practica6GalleryPage;

  beforeEach(() => {
    page = new Practica6GalleryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
