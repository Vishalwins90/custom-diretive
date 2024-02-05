import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-diretive';
   color: any = "skyblue"
  colorclick(color: any) { 
    this.color = color;
  }

  ngOnInit() {

  }
}
