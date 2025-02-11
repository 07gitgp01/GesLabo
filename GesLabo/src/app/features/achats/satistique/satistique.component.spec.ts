import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatistiqueComponent } from './satistique.component';

describe('SatistiqueComponent', () => {
  let component: SatistiqueComponent;
  let fixture: ComponentFixture<SatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatistiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
