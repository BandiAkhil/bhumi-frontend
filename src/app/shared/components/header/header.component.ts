import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
// import { Member } from 'src/app/core/models/member';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nav = [
    {
      name: 'Home',
      route: '/'
    },
    {
      name: 'Articles',
      route: '/posts'
    },
    {
      name: 'Forums',
      route: '/forums'
    },
    {
      name: 'Isha',
      route: '/isha'
    },
    {
      name: 'Login',
      route: '/login'
    }
  ];

  //user: Member;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private meta: Meta) { 
      this.meta.updateTag({ name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no' });
      this.meta.addTag({ name: 'HandHeldfriendly', content: 'true' });
      this.meta.addTag({ httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' });
  }

  ngOnInit() {
//  this.authService.user.subscribe(user => this.user = user);
  }

  logout() {
//     this.authService.logout();
//     this.router.navigate(['/auth/login']);
  }
}
