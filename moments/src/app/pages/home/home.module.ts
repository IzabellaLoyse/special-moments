import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailsMomentComponent } from './components/details-moment/details-moment.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, DetailsMomentComponent],
  imports: [CommonModule, HomeRoutingModule, FontAwesomeModule],
})
export class HomeModule {}
