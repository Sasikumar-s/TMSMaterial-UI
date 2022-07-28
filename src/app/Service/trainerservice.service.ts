import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assessment } from '../Model/assessment';
import { Batch } from '../Model/batch';
import { Trainee } from '../Model/trainee';
import { Trainer } from '../Model/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerserviceService {


    
  constructor(private http:HttpClient) { }
  baseUrl = "http://localhost:5000/api/"


  viewAlltrainer(): Observable<Trainer>{
    const URL = `${this.baseUrl}Trainers`;
    return this.http.get<Trainer>(URL);
  }
  viewAlltrainee(): Observable<Trainee>{
    const URL = `${this.baseUrl}Trainees`;
    return this.http.get<Trainee>(URL);
  }
  viewAllassessment(): Observable<Assessment>{
    const URL = `${this.baseUrl}Assessments`;
    return this.http.get<Assessment>(URL);
  }
  viewAllbatch(): Observable<Batch>{
    const URL = `${this.baseUrl}Batches`;
    return this.http.get<Batch>(URL);
  }

  viewAssessmentById(id:number):Observable<Assessment>{
    const URL = `${this.baseUrl}Assessments/${id}`;
    return this.http.get<Assessment>(URL);
  }

  getUserProfile():Observable<Trainer>{
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer '+ localStorage.getItem('trainerToken')})
    return this.http.get<Trainer>(this.baseUrl+"Trainers/profile", {headers:tokenHeader});
  }
  
}
