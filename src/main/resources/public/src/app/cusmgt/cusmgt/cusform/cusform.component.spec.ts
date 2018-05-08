import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusformComponent } from './cusform.component';

describe('CusformComponent', () => {
  let component: CusformComponent;
  let fixture: ComponentFixture<CusformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
