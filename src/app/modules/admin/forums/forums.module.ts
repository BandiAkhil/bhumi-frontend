import { NgModule } from '@angular/core';

import { ForumsRoutingModule } from './forums-routing.module';
import { SharedModule } from '@src/app/shared/shared.module';
import { ForumsComponent } from './forums.component';


@NgModule({
  declarations: [
    ForumsComponent
  ],
  imports: [
    SharedModule,
    ForumsRoutingModule
  ]
})
export class ForumsModule { }
