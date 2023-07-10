import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Otp } from '../otp';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-otp',
  templateUrl: './login-otp.component.html',
  styleUrls: ['./login-otp.component.sass']
})
export class LoginOtpComponent {

  otp?:any;
  showemail: any = sessionStorage.getItem("email")


  constructor(private api:ApiService,private router: Router){}


  loginotp(f:NgForm){


    let email = sessionStorage.getItem("email");
    this.otp = f.value
    this.otp.email = email
    this.api.loginotp(this.otp).subscribe(
      (data) => {
        this.otp = data
        sessionStorage.setItem("username",this.otp.user.name)
        sessionStorage.setItem('token', this.otp.token);
        this.router.navigate([''])


      }
    );


    }


}


