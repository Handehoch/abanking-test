import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[show-password]',
})
export class HoverDirective {
  constructor(public elementRef: ElementRef) {}
  @Input('hover-class') hoverClass: any;

  @HostListener('mouseover') onMouseEnter() {
    this.elementRef.nativeElement.setAttribute('type', 'text');
  }

  @HostListener('mouseout') onMouseLeave() {
    this.elementRef.nativeElement.setAttribute('type', 'password');
  }
}
