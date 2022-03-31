import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit {
  routeItems: any = [
    {
      name: 'Dashboards',
      path: 'dashboard',
      icon: 'dashboard',
    },
    {
      name: 'Reports',
      path: 'dashboard',
      icon: 'article',
    },
    {
      name: 'Alerts',
      path: 'alerts',
      icon: 'message',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToModule(path) {

    this.router.navigate([`/${path}`])
  }
}
