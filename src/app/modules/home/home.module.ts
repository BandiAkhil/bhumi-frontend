import { NgModule } from '@angular/core';
import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent, WelcomeComponent],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
