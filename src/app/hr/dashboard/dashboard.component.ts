import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  newTraineeUpload(){
    this.router.navigateByUrl("hr/new-trainee-upload")
  }
  newTrainerUpload(){
    this.router.navigateByUrl("hr/new-trainer-upload")
  }
  newTMUpload(){
    this.router.navigateByUrl("hr/new-tm-upload")
  }
  viewAllTrainee(){
    this.router.navigateByUrl("hr/view-all-trainee")
  }
  viewAllTrainer(){
    this.router.navigateByUrl("hr/view-all-trainer")
  }
  viewAllTM(){
    this.router.navigateByUrl("hr/view-all-tm")
  }
  viewAllAssessment(){
    this.router.navigateByUrl("hr/vieew-all-assessment")
  }

}
