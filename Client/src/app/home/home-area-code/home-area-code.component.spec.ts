import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAreaCodeComponent } from './home-area-code.component';

describe('HomeAreaCodeComponent', () => {
  let component: HomeAreaCodeComponent;
  let fixture: ComponentFixture<HomeAreaCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAreaCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAreaCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
