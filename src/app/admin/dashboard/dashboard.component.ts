import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HR } from 'src/app/Model/hr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }
  hr:HR=new HR()
  ngOnInit(): void {
    console.log("Dashboard called");
    
  }
  viewHr(){
    this.router.navigateByUrl("admin/view-all-hr")
  }
  viewTr(){
    this.router.navigateByUrl("admin/view-all-trainer")
  }
  viewTrainee(){
    this.router.navigateByUrl("admin/view-all-trainee")
  }
  addHr(){
    this.router.navigateByUrl("admin/new-hr-upload")
  }
  viewTM(){
    this.router.navigateByUrl("admin/view-all-tm")
  }

}
