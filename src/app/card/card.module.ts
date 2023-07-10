import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from '../product/product.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
class productCard{
  id?: number
  bulk?:number
  product_id?:number
}

export class CardModule { 
  product?: ProductModule
  productCard?:productCard


}
