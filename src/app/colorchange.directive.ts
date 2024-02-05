import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorchange]'
})
export class ColorchangeDirective {
 @Input() change:any

  constructor(private color:ElementRef) { 

  }
 
  ngOnChanges()
  {
    this.color.nativeElement.style.backgroundColor = this.change;
  }
  ngOnInit(){

  }
 
}




