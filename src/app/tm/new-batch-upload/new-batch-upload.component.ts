import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Batch } from 'src/app/Model/batch';
import { Trainer } from 'src/app/Model/trainer';
import { TmserviceService } from 'src/app/Service/tmservice.service';

@Component({
  selector: 'app-new-batch-upload',
  templateUrl: './new-batch-upload.component.html',
  styleUrls: ['./new-batch-upload.component.css']
})
export class NewBatchUploadComponent implements OnInit {

  batch:Batch=new Batch()
  constructor(private service:TmserviceService,private router:Router) { }
  ngOnInit(): void {
    this.allTrainer()
  }
  tr:any
allTrainer(){
  this.service.viewAlltrainer().subscribe(res=>{
    this.tr = res
    console.log(this.tr);
    console.log(this.tr.name);
    
    
  },error=>{
    console.log("Error on getting Trainer List");
    
  })

  
}
  onSubmit(){
    console.log(this.batch.trainerID);
    console.log(this.batch.stream);
    
    
    this.service.addNewBatch(this.batch).subscribe(res=>{
      console.log("data Saved ");
      this.router.navigateByUrl("tm/view-all-batch");
    },error=>{
      console.log("Data not saved");
      
    })
  }
  viewAllbatch(){
    this.router.navigateByUrl("tm/view-all-batch")
  }

}
