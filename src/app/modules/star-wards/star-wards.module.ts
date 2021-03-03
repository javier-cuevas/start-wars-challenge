import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarWardsRoutingModule } from './star-wards-routing.module';

//Components
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    StarWardsRoutingModule
  ]
})
export class StarWardsModule { }