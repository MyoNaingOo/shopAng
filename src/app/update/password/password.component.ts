import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.sass']
})
export class PasswordComponent {
  massagebg?: boolean;
  massage: any;
  passwordshow: boolean = false;

  constructor(private api: ApiService) {
  }

  passwordeye() {
    if (this.passwordshow === true) {
      this.passwordshow = false

    } else {
      this.passwordshow = true
    }
  }

  change(f: NgForm) {


    this.api.changePass(f.value).subscribe({
      next: (response) => {
        if (response.status === 200) {
          this.massagebg = true
          this.massage = 'changepassword is successful';


        }
      },
      error: (error) => {
        this.massagebg = false
        this.massage = 'changepassword is faile';
      }
    })
  }

}
