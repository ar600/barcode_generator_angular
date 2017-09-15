import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Barcode Generator';
  randNum = Math.floor(Math.random()*3);
  colors: string[] = ['red','white','blue']
  getColor = function () {
        return Math.floor(Math.random()*3);
    };
}
