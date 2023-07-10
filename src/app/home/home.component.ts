import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  findlist: boolean = false;

  constructor(private api: ApiService,private router:Router) {
    this.findlist= false
  }



  findpro(f:NgForm){
    this.findlist= true
    this.router.navigate(['search'],{queryParams:{data: f.value.find}})
  }






}
