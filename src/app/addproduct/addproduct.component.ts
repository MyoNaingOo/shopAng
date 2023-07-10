import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.sass'],
})
export class AddproductComponent {

  product?: any;
  files?: any;
  filename: Array<String> = [];
  message?: String;
  date: any = new Date().getTime()
  post_textl?: string;
  urls: any = []
  size: Array<String> = [];

  constructor(private api: ApiService, private http: HttpClient) {

  }


  onFileSelect(event: any) {
    this.files = event.target.files;
    if (event.target.files) {
      for (var i = 0; i < this.files.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i])
        reader.onload = (eventt: any) => {
          this.urls.push(eventt.target.result);
        }

      }
    }

  }

  options = [
    { id: 1, label: 'MML', selected: false },
    { id: 2, label: 'ML', selected: false },
    { id: 3, label: 'M', selected: false },
    { id: 4, label: 'X', selected: false },
    { id: 5, label: 'XL', selected: false },
    { id: 6, label: 'XXL', selected: false }
  ];



  setsize(option: any) {
    for (let i = 0; i < this.options.length; i++) {

      if (this.options[i].id == option.id) {

        if (this.options[i].selected == false) {
          this.options[i].selected = true
        } else {
          this.options[i].selected = false
        }
        console.log(this.options[i]);

      }

    }

  }



  getsize() {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i].selected == true) {

        this.size.push(this.options[i].label)
      }
    }
    return this.size

  }

  updateSelectedValues(option: any) {
    console.log(this.options);
  }


  setimagename() {

    for (let i = 0; i < this.files.length; i++) {
      this.filename.push(this.date + this.files[i].name);

    }
    return this.filename;
  }

  colors: Array<String> = []

  setcolor(event: any) {
    this.colors.push(event.srcElement.value);

  }

  removecolor(color:any){
    var index = this.colors.indexOf(color)
  }

  getcolor(){
    return this.colors
  }



  addpro(f: NgForm) {

    this.product = f.value;
    this.product.post_img = this.setimagename();

    this.product.size = this.getsize()
    this.product.color = this.getcolor()

    this.api.addproduct(this.product).subscribe(
      (data) => {
        this.message = 'Add product is successful';
      }
    )
    this.postfile()

  }


  postfile() {

    for (let i = 0; i < this.files.length; i++) {
      const file: File = this.files[i];

      if (file) {
        const formdata = new FormData();
        formdata.append('file', file, this.date + file.name);

        let tokenStr = 'Bearer ' + sessionStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', tokenStr);

        this.http
          .post('http://localhost:8080/api/image/add', formdata, {
            headers: headers,
            observe: 'response',
          })
          .subscribe({
            next: (response) => {
              if (response.status === 200) {

                this.message = 'upload is successful';
              }
            },
            error: (e) => {
              this.message = 'upload failed';
            }
          })
      }
    }
  }

  // (response) => {
  //   if (response.status === 200) {

  //     this.massage = 'upload is successful';
  //   }
  // },
  // (Error) => {
  //   this.massage = 'upload failed';
  // }


}
