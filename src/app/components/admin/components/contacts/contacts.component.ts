import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { User } from '../../User';
import { filter, map, mapTo, merge, Observable } from 'rxjs';
import {
  ActivatedRoute,
  ResolveEnd,
  ResolveStart,
  Router,
} from '@angular/router';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  private showLoader!: Observable<boolean>;
  private hideLoader!: Observable<boolean>;
  isLoading!: Observable<boolean>;

  personalList!: Observable<User[]>;
  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.personalList = this.activatedRoute.data.pipe(
      map((data) => data?.['users'])
    );


  }
}
