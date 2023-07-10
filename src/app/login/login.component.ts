import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Token } from '../../token';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})

export class LoginComponent {

  token?: Token;
  massage?: String;
  massagebg?: boolean;
  passwordshow: boolean = false;


  eye: any = faEye
  eye_slash: any = faEyeSlash

  passwordeye() {
    if (this.passwordshow === true) {
      this.passwordshow = false

    } else {
      this.passwordshow = true
    }
  }


  constructor(private api: ApiService, private router: Router) { }

  login(f: NgForm) {
    this.api.login(f.value)
      .subscribe({
        next: (data) => {
          this.token = data;
          if (this.token.user?.email != undefined) {
            sessionStorage.setItem("email", this.token.user?.email)
          }
          this.router.navigate(['login-otp'])

        },
        error: (error) => {
          this.massage = "pleasse check"
          this.massagebg = false

        }

      });

  }

  getuu() {
    this.api.getusers().subscribe({
      next: (data) => {
        console.log(data);
      }

    })
  }

  close(alert: Alert) {


	}
}
