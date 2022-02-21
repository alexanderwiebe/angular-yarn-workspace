import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeSharedComponent } from './mfe-shared.component';

describe('MfeSharedComponent', () => {
  let component: MfeSharedComponent;
  let fixture: ComponentFixture<MfeSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfeSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfeSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
