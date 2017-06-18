import { Scheduler2Page } from './app.po';

describe('scheduler2 App', () => {
  let page: Scheduler2Page;

  beforeEach(() => {
    page = new Scheduler2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
