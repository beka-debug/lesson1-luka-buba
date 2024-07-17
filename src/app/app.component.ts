import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title : string = 'lesson1';
  // imgSrc: string = 'https://images.unsplash.com/photo-1719937050640-71cfd3d851be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'
  // x(){
  //   this.title = "new lesson 1"
  // }
  // inpText: string = 'beka'
  arr: any[] = [];
  fname: string = '';
  lname: string = '';
  save() {
    let obj = {
      firstname: this.fname,
      lastname: this.lname,
    };
    this.arr.push(obj)
    console.log(this.arr)
  }
}
