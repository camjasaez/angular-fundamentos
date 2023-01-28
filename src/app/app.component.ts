import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  btnDisable = true;

  person = {
    name: 'Camilo',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }
}
