import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalAComponent } from './local-a.component';

describe('LocalAComponent', () => {
  let component: LocalAComponent;
  let fixture: ComponentFixture<LocalAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
