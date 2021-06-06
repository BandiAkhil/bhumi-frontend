import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '@src/app/core/models/user';
import { DeleteModalComponent } from '@src/app/shared/components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() user: User;
  @Output() save: EventEmitter<User> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required)
  });
  submitted = false;
  roles: string[] = ["ADMIN", "USER"];

  constructor(
    //private notifierService: NotifierService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.user == undefined ? this.user = {id: null, email: null, username: null, password: null, created: null, role: "USER"} :  this.userForm.patchValue(this.user);
  }

  get f() { return this.userForm.controls; }

  onSave() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }
    
    this.user.username = this.userForm.value.username;
    this.user.password = this.userForm.value.password;
    this.user.email = this.userForm.value.email;
    this.user.role = this.userForm.value.role;

    this.save.emit(this.user);
  }

  onCancel() {
    this.cancel.emit();
  }

  openDeleteModal() {
    return this.modalService.open(DeleteModalComponent);
  }

}
