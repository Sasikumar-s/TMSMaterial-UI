import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assessment } from 'src/app/Model/assessment';
import { TmserviceService } from 'src/app/Service/tmservice.service';

@Component({
  selector: 'app-new-assessment-upload',
  templateUrl: './new-assessment-upload.component.html',
  styleUrls: ['./new-assessment-upload.component.css']
})
export class NewAssessmentUploadComponent implements OnInit {

  assessment:Assessment=new Assessment()
  constructor(private service:TmserviceService,private router:Router) { }
  ngOnInit(): void {
    this.allBatch()
  }
  batch:any
allBatch(){
  this.service.viewAllbatch().subscribe(res=>{
    this.batch = res
    console.log(this.batch);
    console.log(this.batch.name);
    
    
  },error=>{
    console.log("Error on getting Trainer List");
    
  })

  
}
  onSubmit(){
    this.service.addNewAssessment(this.assessment).subscribe(res=>{
      console.log("data Saved ");
      this.router.navigateByUrl("tm/view-all-assessment");
    },error=>{
      console.log("Data not saved");
      
    })
  }
  viewAllAssessment(){
    this.router.navigateByUrl("tm/view-all-assessment")
  }

}
