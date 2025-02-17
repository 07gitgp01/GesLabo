import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroitsDetailsComponent } from './droits-details.component';

describe('DroitsDetailsComponent', () => {
  let component: DroitsDetailsComponent;
  let fixture: ComponentFixture<DroitsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroitsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroitsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
