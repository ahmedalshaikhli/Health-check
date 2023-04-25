import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAreaDetailsComponent } from './home-area-details.component';

describe('HomeAreaDetailsComponent', () => {
  let component: HomeAreaDetailsComponent;
  let fixture: ComponentFixture<HomeAreaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAreaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAreaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
