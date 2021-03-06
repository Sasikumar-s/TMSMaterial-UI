import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MaterialModule} from './material/material.module';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component'
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { HrComponent } from './hr/hr.component';
import { HrModule } from './hr/hr.module';
import { TmComponent } from './tm/tm.component';
import { TmModule } from './tm/tm.module';
import { TrainerComponent } from './trainer/trainer.component';
import { TrainerModule } from './trainer/trainer.module';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    DashboardComponent,
    HrComponent,
    TmComponent,
    TrainerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AdminModule,HrModule,TmModule,TrainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
