import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielsListeComponent } from './materiels-liste.component';

describe('MaterielsListeComponent', () => {
  let component: MaterielsListeComponent;
  let fixture: ComponentFixture<MaterielsListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterielsListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterielsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
