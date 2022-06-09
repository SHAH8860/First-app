import { TestBed } from '@angular/core/testing';

import { ShowHideMenuService } from './show-hide-menu.service';

describe('ShowHideMenuService', () => {
  let service: ShowHideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowHideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
