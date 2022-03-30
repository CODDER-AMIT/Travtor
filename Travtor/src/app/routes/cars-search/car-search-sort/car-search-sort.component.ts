import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-search-sort',
  templateUrl: './car-search-sort.component.html',
  styleUrls: ['./car-search-sort.component.scss']
})
export class CarSearchSortComponent {
  selectedSort: string;
  sortOption: string[] = [
    'Price: lowest',
    'Price: highest',
    'Rental company: A to Z',
    'Rental company: Z to A',
    'Car type: A to Z',
    'Car type: Z to A'
  ]
  constructor(private route: Router) { }

  radioChange = (e: any, sort: string) => {
    this.selectedSort = sort;
    this.route.navigate(['/car/result'], { queryParams: { sort } });
  }

}
