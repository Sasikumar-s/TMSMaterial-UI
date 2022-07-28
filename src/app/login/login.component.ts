import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../Model/login';
import { LoginServiceService } from '../Service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login = new Login()

  constructor(private service:LoginServiceService,
    private router:Router) { }
  msg="Here's the dropdown arrow ^"
  ngOnInit(): void {
    if(localStorage.getItem('admintoken')){
      this.router.navigateByUrl("/admin/dashboard")
    }
    else if(localStorage.getItem('hrtoken')){
      this.router.navigateByUrl("/hr/dashboard")
    }
    else if(localStorage.getItem('tmtoken')){
      this.router.navigateByUrl("/tm/dashboard")
    }
    else if(localStorage.getItem('trainerToken')){
      this.router.navigateByUrl("/trainer/dashboard")
    }
  }
  onSubmit(){
    console.log("Inside");
    
    switch(this.login.role){
      case "ADMIN":
        this.service.adminLogin(this.login).subscribe((data:any)=>{
          localStorage.setItem('admintoken',data.token);
          this.router.navigate(['/admin/dashboard'])
        },error=>{
          if(error.status==400){
            this.msg="Incorrect emailid or password"
          }
        })
        break;
      case "HR":
        this.service.hrLogin(this.login).subscribe((data:any)=>{
          localStorage.setItem('hrtoken',data.token);
          this.router.navigate(['/hr/dashboard'])
        },error=>{
          if(error.status==400){
            this.msg="Incorrect emailid or password"
          }
        })
        break;
        case "Training Manager":
          this.service.tmLogin(this.login).subscribe((data:any)=>{
            localStorage.setItem('tmtoken',data.token);
            this.router.navigate(['/tm/dashboard'])
          },error=>{
            if(error.status==400){
              this.msg="Incorrect emailid or password"
            }
          })
        break;

        case "TRAINER":
          this.service.trainerLogin(this.login).subscribe((data:any)=>{
            localStorage.setItem('trainerToken',data.token);
            this.router.navigate(['/trainer/dashboard'])
          },error=>{
            if(error.status==400){
              this.msg="Incorrect emailid or password"
            }
          })
        break;
      default:
        break;
    }
  }

}
