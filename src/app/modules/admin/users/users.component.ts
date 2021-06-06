import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '@src/app/core/models/user';
import { UserService } from '@src/app/core/services/user.service';
import { DeleteModalComponent } from '@src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService,
    private router: Router,
    private modalService: NgbModal,
    //private notifierService: NotifierService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(
      users => {
        this.users = users;
      }
    );
  }

  onDeleteUser(user: User) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.objRef = 'this user';
    modalRef.componentInstance.delete.subscribe(() => {
      this.deleteUser(user.id);
    });
  }

  editUser(user: User) {
    this.router.navigate([`/admin/users/${user.id}/edit`]);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      () => {
        //this.notifierService.notify('success', 'Activity deleted successfully');
        this.users = this.users.filter(a => a.id !== id);
      },
      () => {
        //this.notifierService.notify('error', 'Could not delete activity, try again later.');
      }
    );
  }

}
