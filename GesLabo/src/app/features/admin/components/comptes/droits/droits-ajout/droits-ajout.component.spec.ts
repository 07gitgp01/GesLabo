import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroitsAjoutComponent } from './droits-ajout.component';

describe('DroitsAjoutComponent', () => {
  let component: DroitsAjoutComponent;
  let fixture: ComponentFixture<DroitsAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroitsAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroitsAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
