import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { OrderModule } from '../order/order.module';

@Component({
  selector: 'app-bought',
  templateUrl: './bought.component.html',
  styleUrls: ['./bought.component.sass']
})
export class BoughtComponent {
  orders?: Array<OrderModule>
  message?:any
  imageurl: String = 'http://localhost:8080/api/image/';

  constructor(private api: ApiService){
    this.getbought()
  }

  getbought(){

    this.api.boughtpros().subscribe(
      (data)=>{
        this.orders= data
      }
    )

  }


    deleteOrder(id:any){
    this.api.deleteOrder(id).subscribe({
      next:(response)=>{
        console.log(response);

        this.message = response.body
      },
      error:(err)=>{
        this.message = "Please try again"
      }
    })
  }


}
