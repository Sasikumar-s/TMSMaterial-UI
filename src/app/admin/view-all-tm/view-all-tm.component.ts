import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TM } from 'src/app/Model/tm';
import { AdminserviceService } from 'src/app/Service/adminservice.service';

@Component({
  selector: 'app-view-all-tm',
  templateUrl: './view-all-tm.component.html',
  styleUrls: ['./view-all-tm.component.css']
})
export class ViewAllTmComponent implements OnInit {

  tm:any

  constructor(private service:AdminserviceService,private router:Router) { }


  ngOnInit(): void {
    this.viewAll();
  }

datasource :MatTableDataSource<TM> = new MatTableDataSource<TM>();
  viewAll(){
      this.service.viewAlltm().subscribe((res) => {
        this.tm=res
        this.datasource = new MatTableDataSource<TM>(this.tm)
        },
        (err) => {
          console.log(err);
      })
  
  }
  addData(){
    this.router.navigateByUrl("admin/new-tm-upload")
  }
  removeData(){
    this.router.navigateByUrl("admin/delete-tm")

  }

  displayedColumns: string[] = [
    'tmid',
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
