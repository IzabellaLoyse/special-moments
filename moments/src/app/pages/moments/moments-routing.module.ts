import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewMomentComponent } from './components/new-moment.component';

const routes: Routes = [{ path: 'new', component: NewMomentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MomentsRoutingModule {}
