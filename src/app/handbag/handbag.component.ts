import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ProductModule } from '../product/product.module';
import { CardModule } from '../card/card.module';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-handbag',
  templateUrl: './handbag.component.html',
  styleUrls: ['./handbag.component.sass'],
})
export class HandbagComponent {
  cards?: Array<CardModule>;
  product?: ProductModule;
  products?: Array<ProductModule>;
  number: number = 1;
  message?: string
  bou: any
  color?: string

  imageurl: String = 'http://localhost:8080/api/image/';

  constructor(public api: ApiService) {
    this.getcards();
  }

  getcards() {
    this.api.getcard().subscribe({
      next: (data) => {
        this.cards = data;
      }
    });
  }

  boughtpro(f: NgForm ) {
    this.bou = f.value
    this.bou.color = this.color

    this.api.order(this.bou).subscribe({
      next: (Response) => {
        this.message = "Successfully ordered"


      },
      error: (Error) => {
        this.message = "Please try again"
        console.log("error");
      }
    })
  }


  setcolor(col:any){
    this.color = col
  }



  numberp() {
    this.number = ++this.number;
  }

  numberm() {
    if (this.number > 1) {
      this.number = --this.number;
    }
  }

  price(num:any, price:any) {

    if(price.price_discount != 0) {
        return num * price.price_discount
    }else{

      return num * price.price_original
    }

  }



  deletecard(f: any) {
    this.api.deletecard(f).subscribe({
      next: (Response) => {
        this.message = "Successfully deleted"

      },
      error: (Error) => {
        this.message = "Please try again"
      }
    });
  }
}
