import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {


  darkmode(){
    let body = document.body
    body.classList.toggle("darkmode")
    }

}
