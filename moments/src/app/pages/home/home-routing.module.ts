import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsMomentComponent } from './components/details-moment/details-moment.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'moments/:id',
    component: DetailsMomentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
