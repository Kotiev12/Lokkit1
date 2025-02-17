import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') bgColor: string | null = null;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgColor = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgColor = null;
  }
}
