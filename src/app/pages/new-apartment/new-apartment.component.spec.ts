import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewApartmentComponent } from './new-apartment.component';

describe('NewApartmentComponent', () => {
  let component: NewApartmentComponent;
  let fixture: ComponentFixture<NewApartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewApartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
