import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalBComponent } from './local-b.component';

describe('LocalBComponent', () => {
  let component: LocalBComponent;
  let fixture: ComponentFixture<LocalBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
