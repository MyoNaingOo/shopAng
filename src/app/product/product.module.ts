import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductModule {
  id?: any;
  name?: string;
  category?: string;
  price_original?: number;
  price_discount?:number
  sold_out?: boolean
  brand?: string;
  post_text?: string;
  post_img?: Array<string> ;
  color?: any;
  date?: Date;
  owner ?: any ;
  size?:any

 }
