import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthmgtComponent } from './authmgt.component';

describe('AuthmgtComponent', () => {
  let component: AuthmgtComponent;
  let fixture: ComponentFixture<AuthmgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthmgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthmgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
