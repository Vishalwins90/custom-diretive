import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouse]'
})
export class MouseDirective {

  constructor(public mouse: ElementRef) {
    this.mouse.nativeElement.focus();
  }


}
