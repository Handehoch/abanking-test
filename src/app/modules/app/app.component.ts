import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'abanking-test';
  isLoggedIn: boolean = false;
  sidebarShown: boolean = false;

  constructor(public readonly router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.isLoggedIn = e.url !== '/login';
      }
    });
  }

  onBurgerClick(): void {
    this.sidebarShown = !this.sidebarShown;
  }
}
