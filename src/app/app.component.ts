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

  name:string = ''
  names:string[] = [' Name1',' Name2', " Name3"," Name4"]
  toggleButton (){
    this.btnDisable = !this.btnDisable
  }

  addName(){
    this.names.push(this.name)
    this.name = ''
  }

  eliminateName(index:number){
    this.names.splice(index,1)
  }

  addAge(){
    this.person.age++;
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }


}
