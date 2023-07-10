import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { PostComponent } from './post/post.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { LoginOtpComponent } from './otp/login-otp/login-otp.component';
import { RegisterOtpComponent } from './otp/register-otp/register-otp.component';
import { SearchproComponent } from './search/searchpro/searchpro.component';
import { PasswordComponent } from './update/password/password.component';
import { UsernameComponent } from './update/username/username.component';
import { MenuComponent } from './menu/menu.component';
import { HandbagComponent } from './handbag/handbag.component';
import { BoughtComponent } from './bought/bought.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressComponent } from './update/address/address.component';


const routes: Routes = [
  {path: "",component: HomeComponent },
  {path: "login",component: LoginComponent},
  {path: "profile",component: ProfileComponent},
  {path: "register",component: RegisterComponent},
  {path: "updateprofile",component: UpdateProfileComponent},
  {path:"product/:id",component: ProductComponent },
  {path:"addproduct",component : AddproductComponent},
  {path: "post",component: PostComponent},
  {path: "login-otp",component: LoginOtpComponent},
  {path:"register-otp",component: RegisterOtpComponent},
  {path:"search",component:SearchproComponent},
  {path:"chaneName",component: UsernameComponent},
  {path:"changePassword",component:PasswordComponent},
  {path:"menu", component:MenuComponent},
  {path:"handbag",component:HandbagComponent},
  {path:"bought",component:BoughtComponent},
  {path:"order/:id",component:OrderComponent},
  {path:"changeaddress",component:AddressComponent },
  {path:"dash",component:DashboardComponent},
  {path:"**",component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
