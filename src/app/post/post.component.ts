import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ProductModule } from '../product/product.module';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent {

  imageurl: String = "http://localhost:8080/api/image/"

  FaList:any = faList
  products ?: Array<ProductModule>;
  pro_id?: any
  pro_price_original:any
  message?: string;

  constructor(private api: ApiService,private modalService:NgbModal){
    this.getProducts();
   }


  getuser(){

  }

  getProducts(){
    this.api.getPostByOwner().subscribe(
      data => {
        this.products=data;

      }
    )
  }

  deletepost(id:any){
    this.api.deletepro(id).subscribe(
      (response)=>{
        if(response.status==200){
          this.message = "Success deleted!";
        }else{
          this.message= "faile delete"
        }
      }
    )
  }


	closeResult = '';

  open(content:any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}


  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

  send(f:NgForm){
    console.log(f.value);
    this.api.changePrice(f.value).subscribe({
      next: (data) =>{
        this.message = "Changed price"
      },
      error:(err) =>{
        this.message = "please try again"
      }
    })

  }

  show(id:any,price:any,contect:any){
      this.pro_id = id;
      this.pro_price_original = price;
      this.open(contect);
  }

}
