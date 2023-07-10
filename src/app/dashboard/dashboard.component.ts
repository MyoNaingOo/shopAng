import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiService } from '../service/api.service';
import { OrderModule } from '../order/order.module';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})


export class DashboardComponent implements OnInit {

  orders?:Array<OrderModule>
  yearf: any = new Date().getUTCFullYear();
  dash: any
  config: any
  imageurl: any;

  ngOnInit(): void {

    var sen = {
      year: new Date().getUTCFullYear()
    }

    this.api.dash(sen).subscribe({
      next: (data) => {
        this.dash = data;
        this.config = this.chatui("linec", "line", this.dash.data, "Ordered ", this.dash.labels)
      }
    })

    this.orderlist()
  }

  constructor(private api: ApiService) {
    Chart.register(...registerables);
  }



  chatui(id: any, type: any, data: any, label: any, colorlabel: any) {
    var myChart: any

    return myChart = new Chart(id, {
      type: type,
      data: {
        labels: colorlabel,
        datasets: [
          {
            label: "label",
            data: data,
            backgroundColor: [
              'rgba(255, 00, 00, 0.8)'
            ],
            borderColor: [
              'rgba(255, 00, 00, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
    });

  }


  orderlist(){
    this.api.orderlist().subscribe({
      next:(data)=>{
        this.orders=data
      },
      error:(error)=>{
        console.log("error", error);

      }
  })
  }


}
