import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';

import { CarResultsPageComponent } from './car-results-page.component';

describe('CarResultsPageComponent', () => {
  let component: CarResultsPageComponent;
  let fixture: ComponentFixture<CarResultsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarResultsPageComponent ],
      imports:[
        CommonModule,
        SharedModule,
        RouterModule.forRoot([]),
        StoreModule.forRoot({})
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
