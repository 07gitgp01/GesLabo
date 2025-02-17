import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielsDetailsComponent } from './materiels-details.component';

describe('MaterielsDetailsComponent', () => {
  let component: MaterielsDetailsComponent;
  let fixture: ComponentFixture<MaterielsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterielsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterielsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
