import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaileTaskComponent } from './detaile-task.component';

describe('DetaileTaskComponent', () => {
  let component: DetaileTaskComponent;
  let fixture: ComponentFixture<DetaileTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaileTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaileTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
