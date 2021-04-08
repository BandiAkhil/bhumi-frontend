import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PageLayoutComponent } from './layout/page-layout/page-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HomeComponent } from './modules/home/home.component';
import { AccountComponent } from './modules/account/account.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { AuthComponent } from './modules/auth/auth.component';
import { AdminComponent } from './modules/admin/admin.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ForumsComponent } from './modules/forums/forums.component';
import { PostItemComponent } from './modules/posts/post-item/post-item.component';
import { PostsListComponent } from './shared/components/posts-list/posts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageLayoutComponent,
    AdminLayoutComponent,
    AccountComponent,
    NotFoundComponent,
    AuthComponent,
    AdminComponent,
    PostsComponent,
    ForumsComponent,
    PostItemComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
