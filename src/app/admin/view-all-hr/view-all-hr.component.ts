import { Component, OnInit, ViewChild } from '@angular/core';
import { HR } from 'src/app/Model/hr';
import { AdminserviceService } from 'src/app/Service/adminservice.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-all-hr',
  templateUrl: './view-all-hr.component.html',
  styleUrls: ['./view-all-hr.component.css']
})
export class ViewAllHrComponent implements OnInit {
  hr:any

  constructor(private service:AdminserviceService,private router:Router) { }


  ngOnInit(): void {
    this.viewAll();
  }

datasource :MatTableDataSource<HR> = new MatTableDataSource<HR>();
  viewAll(){
      this.service.viewAllHr().subscribe((res) => {
        this.hr=res
        this.datasource = new MatTableDataSource<HR>(this.hr)
        },
        (err) => {
          console.log(err);
      })
  
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();
  }
  addData(){
    this.router.navigateByUrl("admin/new-hr-upload")
  }
  removeData(){
    this.router.navigateByUrl("admin/delete-hr")

  }

  displayedColumns: string[] = [
    'hrId',
    'name',
    'phoneNumber',
    'experience',
    'educationQualification',
    'dob',
    'address',
    'role',
    'position',
    'emailID',
  ];

}
