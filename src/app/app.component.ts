import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  adicionar(){
    console.log("Adicionando...")
  }
}

  // nome = "Leonardo"
  // idade = 19

  // lancarDado(){
  //   return Math.floor(Math.random() * 6) + 1
  // }