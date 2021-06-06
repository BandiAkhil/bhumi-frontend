import { NgModule } from '@angular/core';

import { IshaRoutingModule } from './isha-routing.module';
import { IshaComponent } from './isha.component';
import { SharedModule } from '@src/app/shared/shared.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [IshaComponent],
  imports: [
    SharedModule,
    IshaRoutingModule,
    NgbPaginationModule
  ]
})
export class IshaModule { }
