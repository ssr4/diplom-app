import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { ResolveEnd, ResolveStart } from '@angular/router';
import { mapTo, filter, merge } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {}

  private showLoader!: Observable<boolean>;
  private hideLoader!: Observable<boolean>;
  isLoading!: Observable<boolean>;

  ngOnInit(): void {
    this.hideLoader = this.router.events.pipe(
      filter((e) => e instanceof ResolveEnd),
      mapTo(false)
    );
    this.showLoader = this.router.events.pipe(
      filter((e) => e instanceof ResolveStart),
      mapTo(true)
    );

    this.isLoading = merge(this.hideLoader, this.showLoader);
  }

  logOut() {
    this.authService.logOut();
  }
}
