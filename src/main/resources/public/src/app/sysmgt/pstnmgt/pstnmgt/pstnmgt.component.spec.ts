import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PstnmgtComponent } from './pstnmgt.component';

describe('PstnmgtComponent', () => {
  let component: PstnmgtComponent;
  let fixture: ComponentFixture<PstnmgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PstnmgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PstnmgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
