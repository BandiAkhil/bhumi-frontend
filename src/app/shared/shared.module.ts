import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PostsListComponent } from 'src/app/shared/components/posts-list/posts-list.component';
import { RouterModule } from '@angular/router';
import { NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationTableComponent } from 'src/app/shared/components/pagination-table/pagination-table.component';
//import { RoleDirective } from 'src/app/shared/directives/role.directive';
//import { ArrowBackComponent } from 'src/app/shared/components/buttons/arrow-back/arrow-back.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
//import { DeleteModalComponent } from 'src/app/shared/components/delete-modal/delete-modal.component';
// import { MemberSearchComponent } from 'src/app/shared/components/member-search/member-search.component';
// import { ForumsListComponent } from 'src/app/shared/components/committees-list/committees-list.component';
import { environment } from 'src/environments/environment.prod';
import { HtmlToTextPipe } from 'src/app/shared/pipes/html-to-text.pipe';
//import { MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ForumsListComponent } from './components/forums-list/forums-list.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ImgUploadComponent } from './components/img-upload/img-upload.component';
import { HtmlEditorComponent } from './components/html-editor/html-editor.component';

@NgModule({
  declarations: [
    PostsListComponent,
    PaginationTableComponent,
    //RoleDirective,
    //ArrowBackComponent,
    HeaderComponent,
    HtmlToTextPipe,
    //DeleteModalComponent,
    //MemberSearchComponent,
    ForumsListComponent,
    DeleteModalComponent,
    PaginationTableComponent,
    TruncatePipe,
    ImgUploadComponent,
    HtmlEditorComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    NgbModalModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    CKEditorModule
    //MatButtonModule,
    //MatProgressSpinnerModule
  ],
  exports: [
    PostsListComponent,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationTableComponent,
    //RoleDirective,
    //ArrowBackComponent,
    HeaderComponent,
    //MaterialModule,
    NgbModalModule,
    HtmlToTextPipe,
    HtmlEditorComponent,
    MDBBootstrapModule,
    //MemberSearchComponent,
    ForumsListComponent,
    TruncatePipe
  ],
  providers: [
    HtmlToTextPipe,
    TruncatePipe
  ],
  entryComponents: [
    //DeleteModalComponent
  ]
})
export class SharedModule { }
