import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Token } from '../../token';
// import { User } from '../user';
import { Router } from '@angular/router';
import { UserModule } from '../user/user.module';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {

  token?: Token;
  user?: UserModule;
  massage?: string;
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


  constructor(private api: ApiService, private router: Router) {

  }

  register(f: NgForm) {

    if (f.value.password === f.value.cpassword) {


      this.api.register(f.value).subscribe({
        next: data => {
          this.token = data;
          if (this.token.user?.email != undefined) {
            sessionStorage.setItem("email", this.token.user?.email)
          }
          this.router.navigate(['register-otp'])

          // sessionStorage.setItem('token', this.token.token);
        },
        error: (error) => {
          this.massage = "Register failed"
          this.massagebg = false
        }
      })
    } else {
      this.massage = "password not same"
    }


  }

}
