import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPointerComponent } from './layout-pointer.component';

describe('LayoutPointerComponent', () => {
  let component: LayoutPointerComponent;
  let fixture: ComponentFixture<LayoutPointerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPointerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPointerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
