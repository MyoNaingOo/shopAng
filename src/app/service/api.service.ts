import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '../../token';
import { Otp } from '../otp/otp';
import { UserModule } from '../user/user.module';
import { ProductModule } from '../product/product.module';
import { CardModule } from '../card/card.module';
import { OrderModule } from '../order/order.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) { }
  // api:string = "http://192.168.43.87:8080/api/"
  api: String = "http://localhost:8080/api/"

  // user api

  public updateuser(user: any) {
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post<UserModule>(this.api+"user/update",user,{headers});

  }

  public changeImage(user: any) {
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post<any>(this.api+"user/image",user,{
      headers: headers ,
      observe: 'response',});

  }



  public changePass(user: any) {
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post<UserModule>(this.api+"user/changePass",user,{
      headers: headers ,
      observe: 'response',});

  }


  public changeName(user: any) {
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post<UserModule>(this.api+"user/changeName",user,{
      headers: headers ,
      observe: 'response',});

  }


  public changeAddress(user: any) {
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post<UserModule>(this.api+"user/changeAddress",user,{
      headers: headers ,
      observe: 'response',});

  }



  public profile(){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get(this.api+"user/user",{headers});

  }

  public regotp(f:any){
    return this.http.post<Otp>(this.api+"otp/register",f)
  }

  public loginotp(f:any){
    return this.http.post<Otp>(this.api+"otp/authenticate",f)
  }





  public login(loginuser: any) {
    return this.http.post<Token>(this.api+"auth/authenticate",loginuser);
  }

  public register(user : JSON){
   return this.http.post<Token>(this.api+"auth/register",user)
  }

  public logout(){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get(this.api+"logout",{headers});
  }

  public getusers(){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get(this.api+"user/users",{headers});
  }

  public getuser(id: any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get(this.api+"user/userid/"+id,{headers});
  }


  // products api

  public getproducts(){
    return this.http.get<ProductModule[]>(this.api+"product/products");
  }

  public getownernameproducts(f:any){
    return this.http.get<ProductModule[]>(this.api+"product/ownername/"+f );
  }

  public getproduct(id: any){
    return this.http.get<ProductModule>(this.api+"product/product/"+id);
  }


  public addproduct(product : any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post(this.api+"product/add",product,
    {headers })
  }
  public getPostByOwner(){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get<ProductModule[]>(this.api+"product/PostByOwner",{headers});
  }

  public findpro(f:any){
    return this.http.get<ProductModule[]>(this.api+"product/find/"+f);
  }

  public deletepro(f:any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.delete(this.api+"product/delete/"+f,{
      headers: headers ,
      observe: 'response',
    });
  }


  public changePrice(user: any) {
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post<UserModule>(this.api+"product/updatePrice",user,{
      headers: headers ,
      observe: 'response',});

  }




  // card api
  public addprocard(f:any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post<ProductModule[]>(this.api+"card/add",f ,{
      headers: headers ,
    observe: 'response', });
  }

  public deletecard(f:any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.delete(this.api+"card/delete/"+f,{
      headers: headers ,
      observe: 'response',});

  }

  public getcard(){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get<CardModule[]>(this.api+"card/all",{ headers:headers });
  }



  // postorder

  public order(f:any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post(this.api+"postor/order",f ,{
      headers: headers ,
    observe: 'response', });
  }

  public getOrder(f:any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers = new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get<OrderModule>(this.api+"postor/ord/"+f,{ headers:headers });
  }


  public deleteOrder(f:any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.delete(this.api+"postor/delete/"+f,{
      headers: headers ,
      observe: 'response',});

  }



  public boughtpros(){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get<OrderModule[]>(this.api+"postor/bought",{
      headers: headers  });
  }

  public DateByOrders(f:any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post(this.api+"postor/DateByOrders",f,{
      headers: headers  });
  }


  public orderlist(){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get<OrderModule[]>(this.api+"postor/ordered",{
      headers: headers  });
  }

  public acceptpro(f:any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.put(this.api+"postor/accept",f,{
      headers: headers ,
      observe: 'response',  });
  }


  public dash(f:any){
    const tokenStr = 'Bearer ' + sessionStorage.getItem('token');
    const headers= new HttpHeaders().set("Authorization",tokenStr);
    return this.http.post<any>(this.api+"postor/dash",f,{
      headers: headers  });
  }




}
