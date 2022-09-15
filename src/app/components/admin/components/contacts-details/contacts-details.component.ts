import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AdminService } from '../../services/admin.service';
import { User } from '../../User';
@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.css'],
})
export class ContactsDetailsComponent implements OnInit {
  id!: number;
  user!: Observable<User>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.user = this.activatedRoute.data.pipe(map((data) => data?.['user']));
  }
}
