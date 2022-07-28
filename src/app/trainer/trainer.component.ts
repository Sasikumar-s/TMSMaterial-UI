import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainer } from '../Model/trainer';
import { TrainerserviceService } from '../Service/trainerservice.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  constructor(private router:Router,private service:TrainerserviceService) { }
  profile:Trainer=new Trainer();
  ngOnInit(): void {
    this.service.getUserProfile().subscribe(res=>{
      this.profile=res;
    },error=>{
      console.log("Cannot get your profile");
      
    })
  }
  Logout(){
    localStorage.removeItem('trainerToken')
    this.router.navigateByUrl("/login")
  }

}
