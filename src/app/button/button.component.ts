import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

 @Input()  color: any = "skyblue"
 @Output() passcolor:any = new EventEmitter<string>()

changecolor(color: any) {
  this.passcolor.emit(color);
}

}
