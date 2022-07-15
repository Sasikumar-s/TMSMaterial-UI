import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HR } from 'src/app/Model/hr';
import { AdminserviceService } from 'src/app/Service/adminservice.service';

@Component({
  selector: 'app-new-hr-upload',
  templateUrl: './new-hr-upload.component.html',
  styleUrls: ['./new-hr-upload.component.css']
})
export class NewHrUploadComponent implements OnInit {

  hr:HR = new HR()
  constructor(private service:AdminserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.addNewHr(this.hr).subscribe(data=>{
      console.log("Data saved");
      this.router.navigate(["dashboard"])
    },error=>{
      console.log("Data not Saved")
    })

  }

}
