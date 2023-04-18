import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../shared/shared.module';
import { DetailsMomentComponent } from './components/details-moment/details-moment.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { EditMomentComponent } from './components/edit-moment/edit-moment.component';

@NgModule({
  declarations: [HomeComponent, DetailsMomentComponent, EditMomentComponent],
  imports: [CommonModule, HomeRoutingModule, FontAwesomeModule, SharedModule],
})
export class HomeModule {}
