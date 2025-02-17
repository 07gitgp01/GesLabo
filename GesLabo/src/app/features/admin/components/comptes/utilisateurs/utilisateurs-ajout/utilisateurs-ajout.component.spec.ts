import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateursAjoutComponent } from './utilisateurs-ajout.component';

describe('UtilisateursAjoutComponent', () => {
  let component: UtilisateursAjoutComponent;
  let fixture: ComponentFixture<UtilisateursAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateursAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateursAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
