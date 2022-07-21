import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assessment } from '../Model/assessment';
import { Batch } from '../Model/batch';
import { HR } from '../Model/hr';
import { TM } from '../Model/tm';
import { Trainee } from '../Model/trainee';
import { Trainer } from '../Model/trainer';

@Injectable({
  providedIn: 'root'
})
export class TmserviceService {

  constructor(private http:HttpClient) { }
  baseUrl = "http://localhost:5000/api/"


  addNewBatch(batch:Batch){
    return this.http.post(this.baseUrl+"batches",batch)
  }
  addNewAssessment(assessment:Assessment){
    return this.http.post(this.baseUrl+"assessments",assessment)
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
  viewAllassessment(): Observable<Assessment>{
    const URL = `${this.baseUrl}Assessments`;
    return this.http.get<Assessment>(URL);
  }
  viewAllbatch(): Observable<Batch>{
    const URL = `${this.baseUrl}Batches`;
    return this.http.get<Batch>(URL);
  }
}
