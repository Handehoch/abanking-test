import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() burgerClick: EventEmitter<void> = new EventEmitter<void>();

  onBurgerClick(): void {
    this.burgerClick.emit();
  }
}
