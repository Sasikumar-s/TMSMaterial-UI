import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/Model/trainer';
import { TrainerserviceService } from 'src/app/Service/trainerservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private service:TrainerserviceService) { }
  profile:Trainer = new Trainer();
  ngOnInit(): void {
    this.service.getUserProfile().subscribe(data=>{
      this.profile=data
    },error=>{
      console.log("Error! while getting your profile ");
      
    })
  }


  viewAllBatch(){
    this.router.navigateByUrl("tm/view-all-batch")
  }
  viewAllAssessment(){
    this.router.navigateByUrl("tm/view-all-assessment")
  }

  viewAllTrainer(){
    this.router.navigateByUrl("tm/vieew-all-trainer")
  }
  viewAllTrainee(){
    this.router.navigateByUrl("tm/view-all-trainee")
  }


}
