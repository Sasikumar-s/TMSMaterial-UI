import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/Model/trainer';
import { HrserviceService } from 'src/app/Service/hrservice.service';

@Component({
  selector: 'app-new-trainer-upload',
  templateUrl: './new-trainer-upload.component.html',
  styleUrls: ['./new-trainer-upload.component.css']
})
export class NewTrainerUploadComponent implements OnInit {

  tr:Trainer=new Trainer()
  constructor(private service:HrserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.addNewTrainer(this.tr).subscribe(res=>{
      console.log("data Saved ");
      this.router.navigateByUrl("hr/view-all-trainer");
    },error=>{
      console.log("Data not saved");
      
    })
  }
  viewAlltr(){
    this.router.navigateByUrl("hr/view-all-trainer")
  }

}
