import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardService } from '../../services/dashboard.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dashboards$: Observable<any>;
  showDashboardItems: boolean;

  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dashboards$ = this.dashboardService.getAllDashboardConfigs();
  }

  onSetCurrent(itemId) {
    console.log(itemId);

    this.router.navigate([`/dashboard/${itemId?.id}`]);
    this.showDashboardItems = false;
    setTimeout(() => {
      this.showDashboardItems = true;
    }, 500);
  }
}
