import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { NewHrUploadComponent } from './new-hr-upload/new-hr-upload.component';
import { FormsModule } from '@angular/forms';
import { ViewAllHrComponent } from './view-all-hr/view-all-hr.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { NewTmUploadComponent } from './new-tm-upload/new-tm-upload.component';
import { ViewAllTmComponent } from './view-all-tm/view-all-tm.component';
import { ViewAllTrainerComponent } from './view-all-trainer/view-all-trainer.component';
import { ViewAllTraineeComponent } from './view-all-trainee/view-all-trainee.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
 
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard],
  children:[
    {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
    {path:"new-hr-upload",component:NewHrUploadComponent,canActivate:[AuthGuard]},
    {path:"view-all-hr",component:ViewAllHrComponent,canActivate:[AuthGuard]},
    {path:'new-tm-upload',component:NewTmUploadComponent,canActivate:[AuthGuard]},
    {path:"view-all-tm",component:ViewAllTmComponent,canActivate:[AuthGuard]},
    {path:"view-all-trainer",component:ViewAllTrainerComponent,canActivate:[AuthGuard]},
    {path:"view-all-trainee",component:ViewAllTraineeComponent,canActivate:[AuthGuard]}
  ]},
  
  
];


@NgModule({
  imports: [RouterModule.forChild(routes),
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatDatepickerModule,
    MatProgressBarModule,
    
  ],
  exports: [RouterModule],
  declarations: [
    NewHrUploadComponent,
    ViewAllHrComponent,
    NewTmUploadComponent,
    ViewAllTmComponent,
    ViewAllTrainerComponent,
    ViewAllTraineeComponent
  ]
  })
export class AdminModule { }
