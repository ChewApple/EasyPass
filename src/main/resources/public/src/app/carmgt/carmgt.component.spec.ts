import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmgtComponent } from './carmgt.component';

describe('CarmgtComponent', () => {
  let component: CarmgtComponent;
  let fixture: ComponentFixture<CarmgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarmgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarmgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
