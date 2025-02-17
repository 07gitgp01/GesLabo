import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateursModifComponent } from './utilisateurs-modif.component';

describe('UtilisateursModifComponent', () => {
  let component: UtilisateursModifComponent;
  let fixture: ComponentFixture<UtilisateursModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateursModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateursModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
