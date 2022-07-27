import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AdminserviceService } from '../Service/adminservice.service';
import { Admin } from '../Model/admin';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router,private service:AdminserviceService) { }
  profile:Admin=new Admin();
  ngOnInit(): void {
    this.service.getUserProfile().subscribe(res=>{
      this.profile=res;
    },error=>{
      console.log("Cannot get your profile");
      
    })
  }
  Logout(){
    localStorage.removeItem('admintoken')
    this.router.navigateByUrl("/login")
  }
}

