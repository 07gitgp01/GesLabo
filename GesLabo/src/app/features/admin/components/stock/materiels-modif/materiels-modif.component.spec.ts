import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielsModifComponent } from './materiels-modif.component';

describe('MaterielsModifComponent', () => {
  let component: MaterielsModifComponent;
  let fixture: ComponentFixture<MaterielsModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterielsModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterielsModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
