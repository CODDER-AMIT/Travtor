import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { Router } from '@angular/router';
import { State, Store } from '@ngrx/store';
import { take } from 'rxjs';
import { driver_age } from 'src/app/driver-age';
import { AppState } from 'src/app/state/app.state';
import { UpdateSearchFormInput } from 'src/app/state/internal.action';
import * as fromInternalSeclector from '../../../state/internal.selector';


export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-car-search-form',
  templateUrl: './car-search-form.component.html',
  styleUrls: ['./car-search-form.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class CarSearchFormComponent implements OnInit {
  carSearchForm: FormGroup;
  minDate: Date;
  maxDate: Date;
  ageList: Array<string> = [];

  constructor(private store: Store<AppState>,
    fb: FormBuilder,
    public router: Router) {


    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 1, 11, 31);

    this.carSearchForm = fb.group({
      "pickUpLocation": new FormControl("", Validators.required),
      "pickUpDate": new FormControl("", Validators.required),
      "dropOffDate": new FormControl("", Validators.required),
      "pickUpTime": new FormControl("", Validators.required),
      "dropOffTime": new FormControl("", Validators.required),
      "ageOfDriver": new FormControl("", Validators.required)
    });
  }

  ngOnInit(): void {
    this.store.select(fromInternalSeclector.getDriverAgeList)
      .pipe(take(1))
      .subscribe((ageList: Array<string>) => {
        this.ageList = ageList;
      });
  }

  onSubmit(): void {
    console.log(this.carSearchForm.value);
    this.store.dispatch(new UpdateSearchFormInput(this.carSearchForm.value))
    this.router.navigate(['car/result']);
  }
}
