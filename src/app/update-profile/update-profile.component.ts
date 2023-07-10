import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.sass']
})
export class UpdateProfileComponent implements OnInit {
  url: any;

  ngOnInit(): void {


  }


  user?: any;
  date: any = Date.now()
  files: any;
  message?: string
  messagebg: boolean = true;


  constructor(private api: ApiService, private http: HttpClient) {

  }

  getinfo() {
    this.api.profile().subscribe(
      (data) => {
        this.user = data
      },
      (error) => {
        alert("something went wrong")
      }
    )
  }

  updatepro(f: NgForm) {


  }

  changeimage(f: NgForm) {

    this.user = f.value
    console.log(this.files[0].name);
    this.user.user_img = this.date + this.files[0].name;
    console.log(this.user);

    this.api.changeImage(this.user).subscribe({
      next: (response) => {
        if (response.status === 200) {
          console.log("success");
          this.setimage();

        }
      },
      error: (Error) => {
        this.message = 'change failed';
      }

    })
  }


  onFileSelect(event: any) {
    this.files = event.target.files;
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event: any) => {
      this.url = event.target.result;
    }

  }


  setimage() {
    const file: File = this.files[0];
    const formdata = new FormData();
    formdata.append('file', file, this.date + file.name);

    let tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', tokenStr);

    this.http
      .post('http://localhost:8080/api/image/add', formdata, {
        headers: headers,
        observe: 'response',
      })
      .subscribe(
        (response) => {
          if (response.status === 200) {
            this.message = 'upload is successful';
          }
        },
        (Error) => {
          this.message = 'upload failed';
        }
      );
  }


}
