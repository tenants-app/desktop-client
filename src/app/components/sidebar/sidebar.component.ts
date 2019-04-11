import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/', title: 'Apartment',  icon:'ni-building text-blue', class: '' },
    { path: '/', title: 'Debts',  icon:'ni-money-coins text-orange', class: '' },
    { path: '/', title: 'Bills',  icon:'ni-chart-bar-32 text-yellow', class: '' },
    { path: '/', title: 'Shopping list',  icon:'ni-basket text-red', class: '' },
    { path: '/', title: 'Duties schedule',  icon:'ni-bullet-list-67 text-info', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
