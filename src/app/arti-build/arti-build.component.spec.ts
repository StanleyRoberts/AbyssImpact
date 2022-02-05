import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtiBuildComponent } from './arti-build.component';

describe('ArtiBuildComponent', () => {
  let component: ArtiBuildComponent;
  let fixture: ComponentFixture<ArtiBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtiBuildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtiBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
