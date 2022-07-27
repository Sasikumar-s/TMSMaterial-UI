import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HR } from '../Model/hr';
import { HrserviceService } from '../Service/hrservice.service';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {

  constructor(private router:Router,private service:HrserviceService) { }
  profile:HR=new HR();
  ngOnInit(): void {
    this.service.getUserProfile().subscribe(res=>{
      this.profile=res;
    },error=>{
      console.log("Cannot get your profile");
      
    })
  }
  Logout(){
    localStorage.removeItem('hrtoken')
    this.router.navigateByUrl("/login")
  }

}
