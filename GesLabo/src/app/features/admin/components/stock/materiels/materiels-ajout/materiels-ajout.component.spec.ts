import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielsAjoutComponent } from './materiels-ajout.component';

describe('MaterielsAjoutComponent', () => {
  let component: MaterielsAjoutComponent;
  let fixture: ComponentFixture<MaterielsAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterielsAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterielsAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
