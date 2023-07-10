import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { OrderModule } from 'src/app/order/order.module';
import { ProductModule } from 'src/app/product/product.module';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-searchpro',
  templateUrl: './searchpro.component.html',
  styleUrls: ['./searchpro.component.sass'],
})
export class SearchproComponent implements OnInit {
  searchpro: any;
  products?: Array<ProductModule>;
  order?: OrderModule;
  page = 1;
  pageSize = 3;
  getpros?: Array<ProductModule>;
  collectionSize: any;

  imageurl: String = 'http://localhost:8080/api/image/';

  producturl: String = '../product/';

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.api.findpro(params.data).subscribe((data) => {
        this.products = data;
        this.collectionSize = this.products.length;
        this.refreshCountries();
      });
    });
  }


  findpro(f:NgForm){
    this.router.navigate(['search'],{queryParams:{data: f.value.find}})
  }


  refreshCountries() {
    this.getpros = this.products?.map((product, i) => ({
      id: i + 1, ...product
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }



}
