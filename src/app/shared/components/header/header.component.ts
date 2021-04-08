import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';
// import { Member } from 'src/app/core/models/member';
// import { PageGroupService } from 'src/app/core/services/page-group.service';
// import { PageGroup } from 'src/app/core/models/page_group';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  _nav = [
    {
      name: 'Home',
      route: '/'
    },
    {
      name: 'Blogs',
      route: '/posts'
    },
    {
      name: 'Forums',
      route: '/forums'
    },
    {
      name: 'Login',
      route: '/login'
    }
  ];
  //_pageGroups: PageGroup[] = [];
  //user: Member;

  constructor(
    private authService: AuthenticationService,
    //private pageGroupService: PageGroupService,
    private router: Router) { }

  ngOnInit() {
//     this.authService.user
//       .subscribe(user => this.user = user);
//
//     this.pageGroupService.pageGroups.subscribe(pageGroups => {
//       this._pageGroups = pageGroups;
//     });
  }

//   get pageGroups() {
//      const nav = cloneDeep(this._nav);
//     for (const pageGroup of this._pageGroups) {
//       const _group = nav.find(p => p.name === pageGroup.name);
//       if (_group) {
//         _group.pages = _group.pages.concat(pageGroup.pages.map(page => {
//           return {
//             title: page.title,
//             route: '/pages/' + page.slug
//           };
//         }));
//       } else {
//         nav.push({
//           name: pageGroup.name,
//           pages: pageGroup.pages.map(page => {
//             return {
//               title: page.title,
//               route: '/pages/' + page.slug
//             };
//           })
//         });
//       }
//     }
//     return nav;
//   }

  logout() {
//     this.authService.logout();
//     this.router.navigate(['/auth/login']);
  }
}
