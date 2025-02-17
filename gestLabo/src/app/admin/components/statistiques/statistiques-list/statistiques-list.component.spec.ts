import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesListComponent } from './statistiques-list.component';

describe('StatistiquesListComponent', () => {
  let component: StatistiquesListComponent;
  let fixture: ComponentFixture<StatistiquesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiquesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiquesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
