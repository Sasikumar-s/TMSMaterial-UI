import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TM } from '../Model/tm';
import { TmserviceService } from '../Service/tmservice.service';

@Component({
  selector: 'app-tm',
  templateUrl: './tm.component.html',
  styleUrls: ['./tm.component.css']
})
export class TmComponent implements OnInit {

  constructor(private router:Router,private service:TmserviceService) { }
  profile:TM=new TM();
  ngOnInit(): void {
    this.service.getUserProfile().subscribe(res=>{
      this.profile=res;
    },error=>{
      console.log("Cannot get your profile");
      
    })
  }
  Logout(){
    localStorage.removeItem('tmtoken')
    this.router.navigateByUrl("/login")
  }

}
