import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdrmgtComponent } from './odrmgt.component';

describe('OdrmgtComponent', () => {
  let component: OdrmgtComponent;
  let fixture: ComponentFixture<OdrmgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdrmgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdrmgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
