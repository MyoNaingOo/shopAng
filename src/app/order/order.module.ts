import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from '../product/product.module';
import { OrderComponent } from './order.component';



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule
  ]
})
export class OrderModule {
  id?:any
  order_bulk?: number
  order_date?: Date
  product?:ProductModule
  user:any
  payment_price?:number
  accept?: boolean
  size:any
  color:any

}
