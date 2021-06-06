import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@src/app/core/models/user';
import { UserService } from '@src/app/core/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userService.getUserById(params.get('id')).subscribe(user => {
        this.user = user;
      });
    });
  }

  onSave(data: User) {
    this.userService.updateUser(this.user.id, data).subscribe(() => {
      this.router.navigate(['/admin/users']).then(() => {
        //this.notifierService.notify('success', 'News item successfully updated.');
      });
    });
  }

  onCancel() {
    this.router.navigate(['/admin/users']);
  }

}
