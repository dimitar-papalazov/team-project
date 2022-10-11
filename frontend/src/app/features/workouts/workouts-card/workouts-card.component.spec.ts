import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutsCardComponent } from './workouts-card.component';

describe('WorkoutsCardComponent', () => {
  let component: WorkoutsCardComponent;
  let fixture: ComponentFixture<WorkoutsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
