import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadMoreRoutingModule } from './read-more-routing.module';

//Components
import { ReadMoreComponent } from './read-more.component';

@NgModule({
  declarations: [ReadMoreComponent],
  imports: [
    CommonModule,
    ReadMoreRoutingModule
  ]
})
export class ReadMoreModule { }
