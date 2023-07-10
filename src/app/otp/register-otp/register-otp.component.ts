import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { Otp } from '../otp';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-otp',
  templateUrl: './register-otp.component.html',
  styleUrls: ['./register-otp.component.sass']
})
export class RegisterOtpComponent {

  otp: any;
  showemail: any = sessionStorage.getItem("email")

  constructor(private api: ApiService,private router:Router){}

  regotp(f:NgForm){



    let email = sessionStorage.getItem("email");
    this.otp = f.value
    this.otp.email = email

    console.log(this.otp);
    this.api.regotp(this.otp).subscribe(
      (response)=> {
        this.otp = response
        sessionStorage.setItem("username",this.otp.user.name)
        sessionStorage.setItem('token', this.otp.token);
        console.log(response);
        this.router.navigate([''])

      }
    )



  }
}
