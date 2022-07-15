import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Assessment } from 'src/app/Model/assessment';
import { HrserviceService } from 'src/app/Service/hrservice.service';

@Component({
  selector: 'app-view-all-assessment',
  templateUrl: './view-all-assessment.component.html',
  styleUrls: ['./view-all-assessment.component.css']
})
export class ViewAllAssessmentComponent implements OnInit {

  assessment:any

  constructor(private service:HrserviceService,private router:Router) { }


  ngOnInit(): void {
    this.viewAll();
  }

datasource :MatTableDataSource<Assessment> = new MatTableDataSource<Assessment>();
  viewAll(){
      this.service.viewAllassessment().subscribe((res) => {
        this.assessment=res
        this.datasource = new MatTableDataSource<Assessment>(this.assessment)
        },
        (err) => {
          console.log(err);
      })
  
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();
  }

  displayedColumns: string[] = [
    "assessmentID",
        "assessmentName",
        "date",
        "duration",
        "startingTime",
        "endingTime",
        "batchID",
  ];

}
