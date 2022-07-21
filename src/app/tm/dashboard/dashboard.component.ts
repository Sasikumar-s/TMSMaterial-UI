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

  crateNewBatch(){
    this.router.navigateByUrl("tm/new-batch-upload")
  }
  viewAllBatch(){
    this.router.navigateByUrl("tm/view-all-batch")
  }
  viewAllAssessment(){
    this.router.navigateByUrl("tm/view-all-assessment")
  }
  crateNewAssessment(){
    this.router.navigateByUrl("tm/new-assessment-upload")
  }
  viewAllTrainer(){
    this.router.navigateByUrl("tm/vieew-all-trainer")
  }
  viewAllTrainee(){
    this.router.navigateByUrl("tm/view-all-trainee")
  }
  viewAlltm(){
    this.router.navigateByUrl("")
  }

}
