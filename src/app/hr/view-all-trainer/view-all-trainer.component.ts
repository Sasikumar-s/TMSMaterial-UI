import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/Model/trainer';
import { HrserviceService } from 'src/app/Service/hrservice.service';

@Component({
  selector: 'app-view-all-trainer',
  templateUrl: './view-all-trainer.component.html',
  styleUrls: ['./view-all-trainer.component.css']
})
export class ViewAllTrainerComponent implements OnInit {

  trainer:any

  constructor(private service:HrserviceService,private router:Router) { }


  ngOnInit(): void {
    this.viewAll();
  }

datasource :MatTableDataSource<Trainer> = new MatTableDataSource<Trainer>();
  viewAll(){
      this.service.viewAlltrainer().subscribe((res) => {
        this.trainer=res
        this.datasource = new MatTableDataSource<Trainer>(this.trainer)
        },
        (err) => {
          console.log(err);
      })
  
  }
  addData(){
    this.router.navigateByUrl("hr/new-trainer-upload")
  }
  removeData(){
    this.router.navigateByUrl("hr/delete-trainer")

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {

  }

  displayedColumns: string[] = [
    "trainerID",
        "name",
        "phoneNumber",
        "skillSet",
        "experience",
        "educationQualification",
        "dob",
        "address",
        "role",
        "position",
        "emailID",
        "Action"
  ];

}
