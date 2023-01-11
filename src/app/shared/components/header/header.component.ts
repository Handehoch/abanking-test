import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() burgerClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(private readonly router: Router) {}

  onLogoutClick(): void {
    localStorage.clear();
    this.router.navigate(['/login']).catch(console.log);
  }

  onBurgerClick(): void {
    this.burgerClick.emit();
  }
}
