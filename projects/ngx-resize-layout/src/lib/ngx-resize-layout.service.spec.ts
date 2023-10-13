import { TestBed } from '@angular/core/testing';

import { NgxResizeLayoutService } from './ngx-resize-layout.service';

describe('NgxResizeLayoutService', () => {
  let service: NgxResizeLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxResizeLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
