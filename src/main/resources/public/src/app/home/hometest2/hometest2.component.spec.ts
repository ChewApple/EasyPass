import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hometest2Component } from './hometest2.component';

describe('Hometest2Component', () => {
  let component: Hometest2Component;
  let fixture: ComponentFixture<Hometest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hometest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hometest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
