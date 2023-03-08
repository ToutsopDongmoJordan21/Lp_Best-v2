import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GammingComponent } from './gamming.component';

describe('GammingComponent', () => {
  let component: GammingComponent;
  let fixture: ComponentFixture<GammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GammingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
