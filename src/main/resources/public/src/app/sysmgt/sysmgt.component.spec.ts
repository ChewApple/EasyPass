import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysmgtComponent } from './sysmgt.component';

describe('SysmgtComponent', () => {
  let component: SysmgtComponent;
  let fixture: ComponentFixture<SysmgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysmgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysmgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
