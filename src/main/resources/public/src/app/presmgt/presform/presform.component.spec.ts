import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresformComponent } from './presform.component';

describe('PresformComponent', () => {
  let component: PresformComponent;
  let fixture: ComponentFixture<PresformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
