import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { faUser, faHome, faKey, faUserPlus, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  message?: String;



  ngOnInit(): void {

    this.isusername();
  }

  title = 'shopapp';
  loginusername?: any = this.loginuser()

  username = sessionStorage.getItem('username');
  faUser: any = faUser;
  faHome: any = faHome;
  fakey: any = faKey;
  faregister: any = faUserPlus
  dark_light_icon: any = faMoon
  theme: any

  findlist: boolean = false;

  constructor(private api: ApiService, private router: Router, private offcanvasService: NgbOffcanvas) {

    this.themeauto()

  }


  themeauto() {
    let body = document.body
    if (localStorage.getItem('theme') == "dark") {

      body.classList.add("darkmode")
      // localStorage.setItem('theme', "light");
      this.dark_light_icon = faMoon

    } else {
      body.classList.remove("darkmode");
      // localStorage.setItem('theme', "dark");
      this.dark_light_icon = faSun

    }


  }

  findpro(f: NgForm) {
    this.findlist = true;
    this.router.navigate(['search'], { queryParams: { data: f.value.find } })
  }

  isusername() {
    if (this.username == null) {
      return false
    } else {
      return true;
    }
  }

  loginuser() {
    if (this.isusername()) {
      return this.username;
    } else {
      return "Login"
    }
  }


  logout() {
    this.api.logout().subscribe(
      (response) => {
        this.message = "Logout is successful"
        sessionStorage.clear();
      },
      (error) => {
        this.message = "Something is not right"
      }
    )
  }

  closeResult = '';
  open(content: any) {
    this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === OffcanvasDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on the backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  dark() {
    let body = document.body

    if (localStorage.getItem('theme') == "dark") {

      body.classList.remove("darkmode")
      localStorage.setItem('theme', "light");
      this.dark_light_icon = faSun

    } else {
      body.classList.add("darkmode");
      localStorage.setItem('theme', "dark");
      this.dark_light_icon = faMoon

    }

  }


  /**
   * function daf(){
    let body=document.body;
    let icon=document.getElementById('dlicon');
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
     body.classList.toggle("darkmode");

     let dicon=document.getElementById('dlicon');
     dicon.classList.toggle("fa-moon");
     dicon.classList.toggle("fa-sun");

  }
   */




}



