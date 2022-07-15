import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Trainee } from 'src/app/Model/trainee';
import { AdminserviceService } from 'src/app/Service/adminservice.service';

@Component({
  selector: 'app-view-all-trainee',
  templateUrl: './view-all-trainee.component.html',
  styleUrls: ['./view-all-trainee.component.css']
})
export class ViewAllTraineeComponent implements OnInit {

  trainee:any

  constructor(private service:AdminserviceService,private router:Router) { }


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
    this.router.navigateByUrl("admin/new-trainee-upload")
  }
  removeData(){
    this.router.navigateByUrl("admin/delete-trainee")

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
