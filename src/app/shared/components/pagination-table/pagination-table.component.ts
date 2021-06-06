import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { get } from 'lodash-es';

interface ColumnDef {
  key: string;
  format: (_: any) => any;
}

@Component({
  selector: 'app-pagination-table',
  templateUrl: './pagination-table.component.html',
  styleUrls: ['./pagination-table.component.scss']
})
export class PaginationTableComponent implements OnInit {
  @ViewChild('paginator', { static: false}) paginator: NgbPagination;
  @Input() data: any[];
  @Input() headers: string[];
  @Input() keys: string[];
  @Input() pagination = true;
  @Input() paginationSize = 10;
  @Input() showActionColumn = false;
  @Input() columnDefs: ColumnDef[] = [];
  @Input() customActionTemplate: TemplateRef<HTMLElement>;
  @Input() total: number;
  @Input() mode = 'frontend';
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() pageChanged = new EventEmitter<any>();
  @Output() search = new EventEmitter<any>();

  paginationPage = 1;
  searchTerm: FormControl = new FormControl('');
  get = get;

  constructor() { }

  ngOnInit() {
    this.listenOnInputChanges();
  }

  private listenOnInputChanges() {
    this.searchTerm.valueChanges.subscribe(
      value => {
        if (this.mode === 'backend') {
          this.search.emit(value);
        }
        if (this.paginator) { this.paginator.page = 1; }
      });
  }

  hasColumnDef(key: string): boolean {
    return this.getColumnDef(key) !== undefined;
  }

  getColumnDef(key: string): ColumnDef | null {
    return this.columnDefs.find(c => c.key === key);
  }

  onEdit(row: any) {
    this.edit.emit(row);
  }

  onDelete(row: any) {
    this.delete.emit(row);
  }

  onPageChange(page: number) {
    if (!this.total) {
      this.paginationPage = page;
    } else {
      const filter = {
        offset: (page - 1) * this.paginationSize,
        limit: this.paginationSize,
        term: this.searchTerm.value
      };
      this.pageChanged.emit(filter);
    }
  }

  get _data() {
    return this.mode === 'frontend'
      ? this.data.slice((this.paginationPage - 1) * this.paginationSize, (this.paginationPage - 1) * this.paginationSize + this.paginationSize)
      : this.data;
  }
}
