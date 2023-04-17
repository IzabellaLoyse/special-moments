import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NewMomentComponent } from './components/new-moment.component';
import { MomentsRoutingModule } from './moments-routing.module';

@NgModule({
  declarations: [NewMomentComponent],
  imports: [CommonModule, MomentsRoutingModule, SharedModule],
})
export class MomentsModule {}
