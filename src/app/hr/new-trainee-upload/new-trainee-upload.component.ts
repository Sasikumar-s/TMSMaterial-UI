import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainee } from 'src/app/Model/trainee';
import { HrserviceService } from 'src/app/Service/hrservice.service';

@Component({
  selector: 'app-new-trainee-upload',
  templateUrl: './new-trainee-upload.component.html',
  styleUrls: ['./new-trainee-upload.component.css']
})
export class NewTraineeUploadComponent implements OnInit {

  tr:Trainee=new Trainee()
  constructor(private service:HrserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.addNewTrainee(this.tr).subscribe(res=>{
      console.log("data Saved ");
      this.router.navigateByUrl("hr/view-all-trainee");
    },error=>{
      console.log(this.tr);
      
      console.log("Data not saved");
      
    })
  }
  viewAlltr(){
    this.router.navigateByUrl("hr/view-all-trainee")
  }

}
