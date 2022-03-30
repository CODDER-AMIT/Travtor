import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { car_list } from './car-itineraries';
import { driver_age } from './driver-age';
import { AppState } from './state/app.state';
import { UpdateCarList, UpdateDRiverAge } from './state/internal.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(new UpdateDRiverAge(driver_age))
    this.store.dispatch(new UpdateCarList(car_list))
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/