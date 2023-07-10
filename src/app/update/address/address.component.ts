import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.sass']
})
export class AddressComponent {
  messagebg?: boolean;
  message?: string;

  constructor(private api: ApiService) { }

  change(f: NgForm) {
    this.api.changeAddress(f.value).subscribe({
      next: (response) => {
        if (response.status === 200) {
          this.messagebg = true
          this.message = 'changed Adderss is successful';
        }
      },
      error: (error) => {
        this.messagebg = false
        this.message = 'change Adderss is faile.Please try again later';
      }
    })
  }
}
