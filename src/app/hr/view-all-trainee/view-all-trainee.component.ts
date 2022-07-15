import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Trainee } from 'src/app/Model/trainee';
import { HrserviceService } from 'src/app/Service/hrservice.service';

@Component({
  selector: 'app-view-all-trainee',
  templateUrl: './view-all-trainee.component.html',
  styleUrls: ['./view-all-trainee.component.css']
})
export class ViewAllTraineeComponent implements OnInit {

  trainee:any

  constructor(private service:HrserviceService,private router:Router) { }


  ngOnInit(): void {
    this.viewAll();
  }

datasource :MatTableDataSource<Trainee> = new MatTableDataSource<Trainee>();
  viewAll(){
      this.service.viewAlltrainee().subscribe((res) => {
        this.trainee=res
        this.datasource = new MatTableDataSource<Trainee>(this.trainee)
        },
        (err) => {
          console.log(err);
      })
  
  }
  addData(){
    this.router.navigateByUrl("hr/new-trainee-upload")
  }
  removeData(){
    this.router.navigateByUrl("hr/delete-trainee")

  }

  displayedColumns: string[] = [
    "traineeID",
        "name",
        "phoneNumber","educationQualification",
        "skillSet",
        "experience",
        
        "dob",
        "address","emailID","position",
        "role",
        
        
        "batchID",

  ];

}
