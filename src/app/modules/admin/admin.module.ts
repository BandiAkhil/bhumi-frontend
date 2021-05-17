import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from '@src/app/layout/admin-layout/admin-layout.component';
import { SharedModule } from '@src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminLayoutComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
