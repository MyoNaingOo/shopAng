import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.sass']
})
export class UsernameComponent {
  messagebg?: boolean;
  message?: string;

  constructor(private api: ApiService) { }

  change(f: NgForm) {
    this.api.changeName(f.value).subscribe({
      next: (response) => {
        if (response.status === 200) {
          this.messagebg = true
          this.message = 'changed username is successful';
          sessionStorage.setItem("username", f.value.name)
        }
      },
      error: (error) => {
        this.messagebg = false
        this.message = 'change username is faile';
      }
    })
  }








}
