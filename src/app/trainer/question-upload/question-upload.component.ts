import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assessment } from 'src/app/Model/assessment';
import { TrainerserviceService } from 'src/app/Service/trainerservice.service';

@Component({
  selector: 'app-question-upload',
  templateUrl: './question-upload.component.html',
  styleUrls: ['./question-upload.component.css']
})
export class QuestionUploadComponent implements OnInit {

  assessment:Assessment=new Assessment();
  constructor(private activatedRoute:ActivatedRoute,
    private service:TrainerserviceService,
    private router:Router,
    private http:HttpClient) { }
  assessmentId=0;
  
  ngOnInit(): void {
    this.allBatch()
    this.assessmentId=this.activatedRoute.snapshot.params['id'];
    this.service.viewAssessmentById(this.assessmentId).subscribe(data=>{
      this.assessment = data;
    },error=>{
      console.log("Error on getting Assessment by ID");
    })
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
  
}
viewAllAssessment(){
  this.router.navigateByUrl("trainer/view-all-assessment")
}





progress: number=0;
  message: string='';
  @Output() public onUploadFinished = new EventEmitter();
uploadFile = (files:any) => {
  if (files.length === 0) {
    return;
  }
  let fileToUpload = <File>files[0];
  const formData = new FormData();
  formData.append('file', fileToUpload, fileToUpload.name);
  
  this.http.post(`http://localhost:5066/api/assessments/${this.assessmentId}`, formData, {reportProgress: true, observe: 'events'})
    .subscribe({
      next: (event:any) => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';
        this.onUploadFinished.emit(event.body);
      }
    },
    error: (err: HttpErrorResponse) => console.log(err)
  });
}

}
