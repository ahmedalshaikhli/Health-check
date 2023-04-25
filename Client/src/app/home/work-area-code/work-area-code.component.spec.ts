import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAreaCodeComponent } from './work-area-code.component';

describe('WorkAreaCodeComponent', () => {
  let component: WorkAreaCodeComponent;
  let fixture: ComponentFixture<WorkAreaCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkAreaCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkAreaCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
