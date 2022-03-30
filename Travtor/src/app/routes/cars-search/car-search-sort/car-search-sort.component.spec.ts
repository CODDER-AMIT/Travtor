import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';

import { CarSearchSortComponent } from './car-search-sort.component';

describe('CarSearchSortComponent', () => {
  let component: CarSearchSortComponent;
  let fixture: ComponentFixture<CarSearchSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarSearchSortComponent],
      imports: [
        NoopAnimationsModule,
        CommonModule,
        SharedModule,
        RouterModule.forRoot([]),
        StoreModule.forRoot({})],
      providers: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSearchSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
