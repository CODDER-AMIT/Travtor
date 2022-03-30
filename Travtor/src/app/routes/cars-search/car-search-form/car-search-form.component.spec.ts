import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarSearchFormComponent } from './car-search-form.component';

describe('CarSearchFormComponent', () => {
  let component: CarSearchFormComponent;
  let fixture: ComponentFixture<CarSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSearchFormComponent ],
      imports:[ NoopAnimationsModule, CommonModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forRoot([]),
        StoreModule.forRoot({})
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have Submit button label as 'Search Rental Cars'`,(() => {
    const btn = fixture.debugElement.nativeElement.querySelector('#submitBtn');
    expect(btn.innerText).toEqual('Search Rental Cars');
  }));
  it(`Form should be invalid with empty fields'`,(() => {
    expect(component.carSearchForm.invalid).toBeTruthy();
  }));
  it(`Form should be valid with reuired field inputs'`,(() => {
    component.carSearchForm.controls['pickUpLocation'].setValue('Bwm-Kota');
    component.carSearchForm.controls['pickUpDate'].setValue(new Date());
    component.carSearchForm.controls['dropOffDate'].setValue(new Date());
    component.carSearchForm.controls['pickUpTime'].setValue('10:30');
    component.carSearchForm.controls['dropOffTime'].setValue('22.30');
    component.carSearchForm.controls['ageOfDriver'].setValue('22');
    expect(component.carSearchForm.valid).toBeTruthy();
  }));
});
