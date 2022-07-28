import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  

  constructor(private http:HttpClient) { }
  baseUrl = "http://localhost:5000/api/"
  
  adminLogin(login:Login){
    return this.http.post(this.baseUrl+"admins/login",login)
  }
  hrLogin(login: Login) {
      return this.http.post(this.baseUrl+"hrs/login",login)
  }
  tmLogin(login:Login){
    return this.http.post(this.baseUrl+"TrainerManagers/login",login)
  }
  trainerLogin(login:Login){
    return this.http.post(this.baseUrl+"Trainers/login",login)
  }
}
