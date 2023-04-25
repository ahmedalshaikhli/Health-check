import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAreaDetailsComponent } from './work-area-details.component';

describe('WorkAreaDetailsComponent', () => {
  let component: WorkAreaDetailsComponent;
  let fixture: ComponentFixture<WorkAreaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkAreaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkAreaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
