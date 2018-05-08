import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusmgtComponent } from './cusmgt.component';

describe('CusmgtComponent', () => {
  let component: CusmgtComponent;
  let fixture: ComponentFixture<CusmgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusmgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusmgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
