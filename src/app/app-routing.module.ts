import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutComponent } from 'src/app/layout/page-layout/page-layout.component';
// import { AuthGuard } from 'src/app/core/guards/auth.guard';
// import { PageResolver } from 'src/app/core/services/resolvers/page.resolver';

const routes: Routes = [
//   {
//     path: 'admin',
//     canActivate: [AuthGuard],
//     loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
//   },
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
//       {
//         path: 'posts',
//         loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)
//       },
//       {
//         path: 'forums',
//         loadChildren: () => import('./modules/forums/forums.module').then(m => m.ForumsModule)
//       },
//       {
//         path: 'auth',
//         loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
//       },
//       {
//         path: 'account',
//         canActivate: [AuthGuard],
//         loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule)
//       },
//       {
//         path: 'pages/:slug',
//         loadChildren: () => import('./modules/page/page.module').then(m => m.PageModule) ,
//         resolve: {
//           page: PageResolver
//         }
//       },
//       {
//         path: '**',
//         loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)
//       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
