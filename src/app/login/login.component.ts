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

  ngOnInit(): void {
  }
  onSubmit(){
    let loginStatus  = false
    console.log("Inside");
    
    switch(this.login.role){
      case "ADMIN":
        loginStatus = this.service.adminLogin(this.login)
        if(loginStatus){
          console.log("Correct");
          this.router.navigate(['/admin/dashboard'])
        }
        else{
          console.log("Incorrect credintial");
          
          
        }
        break;
      case "HR":
        loginStatus = this.service.hrLogin(this.login)
        if(loginStatus){
          this.router.navigate(['/hr/dashboard'])
        }
        break;
      default:
        break;
    }
  }

}
