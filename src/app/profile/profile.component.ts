import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { UserModule } from '../user/user.module';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {

  user ?:UserModule;
  imglink :string= "http://localhost:8080/api/image/";

  constructor(private api: ApiService){
    this.getuserobj()
  }

  getuserobj(){

    this.api.profile().subscribe(
      (data) => {
        this.user = data;
      }
      )


  }




}
