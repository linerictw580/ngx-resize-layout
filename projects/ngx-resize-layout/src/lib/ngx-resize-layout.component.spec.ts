import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxResizeLayoutComponent } from './ngx-resize-layout.component';

describe('NgxResizeLayoutComponent', () => {
  let component: NgxResizeLayoutComponent;
  let fixture: ComponentFixture<NgxResizeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxResizeLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxResizeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
