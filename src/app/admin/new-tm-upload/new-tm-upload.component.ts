import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TM } from 'src/app/Model/tm';
import { AdminserviceService } from 'src/app/Service/adminservice.service';

@Component({
  selector: 'app-new-tm-upload',
  templateUrl: './new-tm-upload.component.html',
  styleUrls: ['./new-tm-upload.component.css']
})
export class NewTmUploadComponent implements OnInit {
  tm:TM=new TM()
  constructor(private service:AdminserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.addNewTm(this.tm).subscribe(res=>{
      console.log("data Saved ");
      this.router.navigateByUrl("admin/view-all-tm");
    },error=>{
      console.log("Data not saved");
      
    })
  }
  viewAllTm(){
    this.router.navigateByUrl("admin/view-all-tm")
  }

}
