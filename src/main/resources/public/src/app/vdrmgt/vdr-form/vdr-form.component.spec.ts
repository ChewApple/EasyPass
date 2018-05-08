import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VdrFormComponent } from './vdr-form.component';

describe('VdrFormComponent', () => {
  let component: VdrFormComponent;
  let fixture: ComponentFixture<VdrFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdrFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
