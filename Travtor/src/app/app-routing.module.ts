import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportPageComponent } from './shared/componenets/support-page/support-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'car', pathMatch: 'full' },
  {
    path: 'car',
    loadChildren: () => import('../app/routes/cars-search/cars-search.module')
      .then(m => m.CarSearchModule)
  },
  {
    path: '**',
    component: SupportPageComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
