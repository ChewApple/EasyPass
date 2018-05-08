import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HometestComponent } from './hometest.component';

describe('HometestComponent', () => {
  let component: HometestComponent;
  let fixture: ComponentFixture<HometestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
