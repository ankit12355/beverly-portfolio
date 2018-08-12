import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    AboutMeRoutingModule
  ],
  declarations: [AboutComponent]
})
export class AboutMeModule { }
