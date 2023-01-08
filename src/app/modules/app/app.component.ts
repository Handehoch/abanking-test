import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('panelInOut', [
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(800),
      ]),
      transition('* => void', [
        animate(800, style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
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
