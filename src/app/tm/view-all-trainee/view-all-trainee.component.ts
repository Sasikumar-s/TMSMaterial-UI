import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Trainee } from 'src/app/Model/trainee';
import { TmserviceService } from 'src/app/Service/tmservice.service';

@Component({
  selector: 'app-view-all-trainee',
  templateUrl: './view-all-trainee.component.html',
  styleUrls: ['./view-all-trainee.component.css']
})
export class ViewAllTraineeComponent implements OnInit {


  trainee:any

  constructor(private service:TmserviceService,private router:Router) { }


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
    this.router.navigateByUrl("tm/new-trainee-upload")
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();
  }


}
