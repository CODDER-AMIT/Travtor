import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import * as fromInternalSeclector from '../../../state/internal.selector';
import { CarItineraries, CarList } from './car.model';



@Component({
  selector: 'app-car-results-page',
  templateUrl: './car-results-page.component.html',
  styleUrls: ['./car-results-page.component.scss']
})
export class CarResultsPageComponent implements OnInit {
  carList: CarList;
  carSearchDetails: any;
  carSearchInfo: string;
  sort: string;

  constructor(private store: Store<AppState>,
    public router: Router,
    private route: ActivatedRoute) {
    this.store.select(fromInternalSeclector.getCarList)
      .pipe(take(1))
      .subscribe((carList: CarList) => {
        this.route.queryParamMap.pipe(take(1))
          .subscribe((params: any) => {
            const sort = params.params.sort ? params.params.sort : '';
            this.carList = this.getSortedList(carList, sort);
          });
      });
  }

  ngOnInit(): void {
    this.store.select(fromInternalSeclector.getCarSearchDetails)
      .pipe(take(1))
      .subscribe((carSearchDetails: any) => {
        if (carSearchDetails) {
          this.carSearchDetails = carSearchDetails;
          this.carSearchInfo = this.carSearchDetails.pickUpDate._d.toLocaleString('default', { month: 'short' }) + ' ' + this.carSearchDetails.pickUpDate._d.getDay() + ', ' + this.fetchTime(this.carSearchDetails.pickUpTime) + '  -  ' +
            this.carSearchDetails.dropOffDate._d.toLocaleString('default', { month: 'short' }) + ' ' + this.carSearchDetails.dropOffDate._d.getDay() + ', ' + this.fetchTime(this.carSearchDetails.dropOffTime)
        }
      });
  }

  fetchTime = (time: string): string => {
    let timFraction = time.split(':');
    let tim = Number(timFraction[0]);
    if (tim > 12) {
      return tim - 12 + ':' + timFraction[1] + ' pm';
    }
    return tim + ':' + timFraction[1] + ' am';
  }

  getDateString(val: string): string {
    return new Date(val).toDateString();
  }

  getSortedList = (carList_Data: CarList, sort: string) => {
    const carList = JSON.parse(JSON.stringify(carList_Data));
    switch (sort) {
      case 'Price: lowest':
        carList.CarItineraries = carList.CarItineraries.sort((carItinerarie_a: CarItineraries, carItinerarie_b: CarItineraries) => {
          return carItinerarie_a.fare.totalAmount - carItinerarie_b.fare.totalAmount;
        });
        break;

      case 'Price: highest':
        carList.CarItineraries = carList.CarItineraries.sort((carItinerarie_a: CarItineraries, carItinerarie_b: CarItineraries) => {
          return carItinerarie_b.fare.totalAmount - carItinerarie_a.fare.totalAmount;
        });
        break;

      case 'Rental company: A to Z':
        carList.CarItineraries = carList.CarItineraries.sort((carItinerarie_a: CarItineraries, carItinerarie_b: CarItineraries) => {
          return carItinerarie_a.vehicle.name.length - carItinerarie_b.vehicle.name.length;
        });
        break;

      case 'Rental company: Z to A':
        carList.CarItineraries = carList.CarItineraries.sort((carItinerarie_a: CarItineraries, carItinerarie_b: CarItineraries) => {
          return carItinerarie_b.vehicle.name.length - carItinerarie_a.vehicle.name.length;
        });
        break;

      case 'Car type: A to Z':
        carList.CarItineraries = carList.CarItineraries.sort((carItinerarie_a: CarItineraries, carItinerarie_b: CarItineraries) => {
          return carItinerarie_a.vehicle.type.length - carItinerarie_b.vehicle.type.length;
        });
        break;

      case 'Car type: Z to A':
        carList.CarItineraries = carList.CarItineraries.sort((carItinerarie_a: CarItineraries, carItinerarie_b: CarItineraries) => {
          return carItinerarie_b.vehicle.type.length - carItinerarie_a.vehicle.type.length;
        });
        break;

      default:
        return carList
    }
    return carList;
  }
}
