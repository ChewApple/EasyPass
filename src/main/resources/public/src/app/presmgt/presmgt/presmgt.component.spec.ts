import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresmgtComponent } from './presmgt.component';

describe('PresmgtComponent', () => {
  let component: PresmgtComponent;
  let fixture: ComponentFixture<PresmgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresmgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresmgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
