import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { AdminLayoutComponent } from 'src/app/layout/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: AdminComponent
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'posts',
        loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
      },
      {
        path: 'comments',
        loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule)
      },
      {
        path: 'forums',
        loadChildren: () => import('./forums/forums.module').then(m => m.ForumsModule)
      },
      {
        path: 'forum-answers',
        loadChildren: () => import('./forum-answers/forum-answers.module').then(m => m.ForumAnswersModule)
      },
      {
        path: 'isha',
        loadChildren: () => import('./isha/isha.module').then(m => m.IshaModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
