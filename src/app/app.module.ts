import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProfileComponent } from './profile/profile.component';
import { ApiService } from './service/api.service';
import { PostComponent } from './post/post.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { LoginOtpComponent } from './otp/login-otp/login-otp.component';
import { RegisterOtpComponent } from './otp/register-otp/register-otp.component';
import { SearchproComponent } from './search/searchpro/searchpro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PasswordComponent } from './update/password/password.component';
import { UsernameComponent } from './update/username/username.component';
import { MenuComponent } from './menu/menu.component';
import { BoughtComponent } from './bought/bought.component';
import { HandbagComponent } from './handbag/handbag.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressComponent } from './update/address/address.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    ProductsComponent,
    AddproductComponent,
    ProfileComponent,
    PostComponent,
    UpdateProfileComponent,
    LoginOtpComponent,
    RegisterOtpComponent,
    SearchproComponent,
    PasswordComponent,
    UsernameComponent,
    MenuComponent,
    BoughtComponent,
    HandbagComponent,
    OrderComponent,
    PageNotFoundComponent,
    DashboardComponent,
    AddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule

  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
