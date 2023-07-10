import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ProductModule } from '../product/product.module';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  // imageurl: String = "http://192.168.43.87:8080/api/image/"
  imageurl: String = "http://localhost:8080/api/image/"

  producturl: String = "product/"
  products?: Array<ProductModule>;
  getpros?: Array<ProductModule>;
  page = 1;
  pageSize = 3;
  collectionSize: any;


  constructor(private api: ApiService) {
    this.getproducts();



  }
  ngOnInit(): void {

  }


  refreshCountries() {
    this.getpros = this.products?.map((product, i) => ({
      id: i + 1, ...product
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }



  getproducts() {

    this.api.getproducts().subscribe(
      (data) => {
        this.products = data;
        this.collectionSize = this.products.length;
        this.refreshCountries();

      }
    )
  }

  price(pro: any): any {
    if (pro.price_discount != null || pro.price_discount <= 0) {
      return pro.price_original
    } else {
      return pro.price_discount
    }
  }


}
