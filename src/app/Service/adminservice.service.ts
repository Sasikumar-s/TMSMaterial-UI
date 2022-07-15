import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HR } from '../Model/hr';
import { TM } from '../Model/tm';
import { Trainee } from '../Model/trainee';
import { Trainer } from '../Model/trainer';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }
  baseUrl = "http://localhost:5000/api/"
  // api/hrs/upload-hr
  addNewHr(hr:HR){
    return this.http.post(this.baseUrl+"hrs/upload-hr",hr)
  }
  viewAllHr(): Observable<HR> {
    const URL = `${this.baseUrl}hrs`;
    return this.http.get<HR>(URL);
}

addNewTm(tm:TM){
  console.log(tm);
  return this.http.post(this.baseUrl+"TrainerManagers",tm)
}
viewAlltm(): Observable<TM>{
  const URL = `${this.baseUrl}TrainerManagers`;
  return this.http.get<TM>(URL);
}
viewAlltrainer(): Observable<Trainer>{
  const URL = `${this.baseUrl}Trainers`;
  return this.http.get<Trainer>(URL);
}
viewAlltrainee(): Observable<Trainee>{
  const URL = `${this.baseUrl}Trainees`;
  return this.http.get<Trainee>(URL);
}
}
