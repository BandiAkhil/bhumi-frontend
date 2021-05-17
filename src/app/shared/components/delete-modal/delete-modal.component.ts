import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


enum Action {
  DELETE = 'delete',
  DE_REGISTER = 'de-register',
  DELETE_FORUM = 'delete-forum',
  DELETE_USER = 'delete-user'
}

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Input() objRef: string;
  @Input() action: string = this._action.DELETE;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  get _action() {
    return Action;
  }

  _delete() {
    this.delete.emit('Deleting');
    this.activeModal.close();
  }

  dismiss() {
    this.activeModal.dismiss();
  }
}
