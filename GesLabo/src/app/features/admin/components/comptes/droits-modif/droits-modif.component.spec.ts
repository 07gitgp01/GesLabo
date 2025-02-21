import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroitsModifComponent } from './droits-modif.component';

describe('DroitsModifComponent', () => {
  let component: DroitsModifComponent;
  let fixture: ComponentFixture<DroitsModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroitsModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroitsModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
