import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationModifComponent } from './reservation-modif.component';

describe('ReservationModifComponent', () => {
  let component: ReservationModifComponent;
  let fixture: ComponentFixture<ReservationModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
