import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { NgForm } from '@angular/forms';
import { ProductModule } from './product.module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {

  id: any;
  product ?: ProductModule;
  imageurl: String = "http://localhost:8080/api/image/"
  // imageurl:String = "http://192.168.43.87:8080/api/image/"
  ownername?: string
  products ?: Array<ProductModule> ;
  number: number =1
  producturl: String = "../"
  message?: string


  constructor(private api: ApiService, private route: ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getproduct(this.id);


  }

  getproduct(id:any){

    this.api.getproduct(id).subscribe({
     next:(data)=> {
        this.product=data;
        this.getownerpros(data.owner.name)
        console.log(data);

      }
     })
  }

  addcard(f:NgForm){
    this.api.addprocard(f.value).subscribe({
      next: (response)=>{
        if(response.status === 200){
          this.message ="finished adding card"
        }
      },
      error:(Error)=>{
        this.message = "please try again"
      }
     } )

  }

  getownerpros(owner?: any){

    this.api.getownernameproducts(owner).subscribe({
     next:(data)=>{
        this.products = data;
      }
  })

  }

  numberp(){
    this.number= ++this.number
  }


  numberm(){
    if(this.number>1){
    this.number= --this.number
  }
}



}
