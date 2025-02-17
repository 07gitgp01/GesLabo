import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroitsListeComponent } from './droits-liste.component';

describe('DroitsListeComponent', () => {
  let component: DroitsListeComponent;
  let fixture: ComponentFixture<DroitsListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroitsListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroitsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
