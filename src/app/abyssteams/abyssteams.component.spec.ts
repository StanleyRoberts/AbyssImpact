import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbyssteamsComponent } from './abyssteams.component';

describe('AbyssteamsComponent', () => {
  let component: AbyssteamsComponent;
  let fixture: ComponentFixture<AbyssteamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbyssteamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbyssteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
