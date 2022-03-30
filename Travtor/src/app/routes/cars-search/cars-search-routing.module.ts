import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarResultsPageComponent } from './car-results-page/car-results-page.component';
import { CarSearchFormComponent } from './car-search-form/car-search-form.component';
import { CarSearchSortComponent } from './car-search-sort/car-search-sort.component';
import { CarsSearchComponent } from './cars-search.component';

const routes: Routes = [
    {
        path: '',
        component: CarsSearchComponent,
        children: [
            {
                path: '',
                redirectTo: 'search',
                pathMatch: 'full'
            },
            {
                path: 'search',
                component: CarSearchFormComponent
            },
            {
                path: 'result',
                component: CarResultsPageComponent
            },
            {
                path: 'sort',
                component: CarSearchSortComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarSearchRoutingModule { }
