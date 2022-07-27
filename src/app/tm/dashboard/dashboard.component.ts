import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TM } from 'src/app/Model/tm';
import { TmserviceService } from 'src/app/Service/tmservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private service:TmserviceService) { }
  profile:TM = new TM();
  ngOnInit(): void {
    this.service.getUserProfile().subscribe(data=>{
      this.profile=data
    },error=>{
      console.log("Error! while getting your profile ");
      
    })
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
