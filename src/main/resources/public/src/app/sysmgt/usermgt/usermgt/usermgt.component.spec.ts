import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermgtComponent } from './usermgt.component';

describe('UsermgtComponent', () => {
  let component: UsermgtComponent;
  let fixture: ComponentFixture<UsermgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
