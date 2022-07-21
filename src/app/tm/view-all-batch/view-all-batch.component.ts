import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Batch } from 'src/app/Model/batch';
import { TmserviceService } from 'src/app/Service/tmservice.service';

@Component({
  selector: 'app-view-all-batch',
  templateUrl: './view-all-batch.component.html',
  styleUrls: ['./view-all-batch.component.css']
})
export class ViewAllBatchComponent implements OnInit {

  batch:any

  constructor(private service:TmserviceService,private router:Router) { }


  ngOnInit(): void {
    this.viewAll();
  }

datasource :MatTableDataSource<Batch> = new MatTableDataSource<Batch>();
  viewAll(){
      this.service.viewAllbatch().subscribe((res) => {
        this.batch=res
        this.datasource = new MatTableDataSource<Batch>(this.batch)
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
    this.router.navigateByUrl("tm/new-batch-upload")
  }
  removeData(){
    this.router.navigateByUrl("tm/delete-trainer")

  }

  displayedColumns: string[] = [
    "batchID",
    "batchName",
    "stream",
    "trainerID"
  ];

}
