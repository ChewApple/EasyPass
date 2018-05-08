import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VdrmgtComponent } from './vdrmgt.component';

describe('VdrmgtComponent', () => {
  let component: VdrmgtComponent;
  let fixture: ComponentFixture<VdrmgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdrmgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdrmgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
