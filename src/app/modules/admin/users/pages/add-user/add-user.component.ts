import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@src/app/core/models/user';
import { UserService } from '@src/app/core/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,) {}
    //private notifierService: NotifierService) { }

  ngOnInit() {
  }

  onSave(data: User) {
    this.userService.createUser(data).subscribe(() => {
      this.router.navigate(['/admin/users']).then(() => {
        //this.notifierService.notify('success', 'News item successfully created.');
      });
    });
  }

  onCancel() {
    this.router.navigate(['/admin/users']);
  }

}
