import { NgModule } from '@angular/core';

import { ForumsRoutingModule } from './forums-routing.module';
import { ForumItemComponent } from './forum-item/forum-item.component';
import { ForumsComponent } from './forums.component';
import { SharedModule } from '@src/app/shared/shared.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ForumsComponent,
    ForumItemComponent
  ],
  imports: [
    SharedModule,
    ForumsRoutingModule,
    NgbPaginationModule
  ]
})
export class ForumsModule { }
