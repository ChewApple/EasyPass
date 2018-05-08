import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PstnformComponent } from './pstnform.component';

describe('PstnformComponent', () => {
  let component: PstnformComponent;
  let fixture: ComponentFixture<PstnformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PstnformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PstnformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
