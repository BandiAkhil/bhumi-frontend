import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FooterComponent } from './layout/footer/footer.component';
import { PageLayoutComponent } from './layout/page-layout/page-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HomeComponent } from './modules/home/home.component';
import { AccountComponent } from './modules/account/account.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { AuthComponent } from './modules/auth/auth.component';
import { AdminComponent } from './modules/admin/admin.component';
import { ForumsComponent } from './modules/forums/forums.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AdminLayoutComponent,
    AccountComponent,
    NotFoundComponent,
    AuthComponent,
    AdminComponent,
    ForumsComponent,
    PageLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
