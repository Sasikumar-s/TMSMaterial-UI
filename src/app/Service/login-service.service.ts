import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  hrLogin(login: Login) {
    let loginStatus = false
    if(login.emailId=="hr"&&login.password=="123"){
      loginStatus=true
    }
    return loginStatus
  }

  constructor(private http:HttpClient) { }
  baseUrl = "http://localhost:8080";
  
  adminLogin(login:Login){
    let loginStatus = false
    if(login.emailId=="admin"&&login.password=="123"){
      loginStatus=true
    }
    return loginStatus
  }

  tmLogin(login:Login){
    let loginStatus = false
    if(login.emailId=="tm"&&login.password=="123"){
      loginStatus=true
    }
    return loginStatus
  }
}
