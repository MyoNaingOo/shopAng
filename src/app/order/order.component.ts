import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { OrderModule } from './order.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})

export class OrderComponent {

  orderdata ?: OrderModule
  imageurl: String = 'http://localhost:8080/api/image/';
  message?: string;
  id:any
  date:any

  constructor(private api: ApiService, private route: ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id');
    this.getorder(this.id)

  }



  getorder(id:any){
    this.api.getOrder(id).subscribe({
      next:(data) =>{
        this.orderdata = data

      }
    })
  }






  accept(f:any){
    this.api.acceptpro(f).subscribe({
      next:(Response) => {
        this.message="Successfully accepted"


      },
      error:(Error) => {
        this.message="Please try again"
      }
  });

  }


  deleteOrder(id:any){
    this.api.deleteOrder(id).subscribe({
      next:(data)=>{
        this.message = "Delete Order"
      },
      error:(err)=>{
        this.message = "Please try again"
      }
    })
  }




}
