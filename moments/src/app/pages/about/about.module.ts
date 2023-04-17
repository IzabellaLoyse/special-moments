import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
