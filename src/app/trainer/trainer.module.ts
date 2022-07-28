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
import { FormsModule } from '@angular/forms';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSortModule } from '@angular/material/sort';
import { ViewAllBatchComponent } from './view-all-batch/view-all-batch.component';
import { ViewAllTraineeComponent } from './view-all-trainee/view-all-trainee.component';
import { ViewAllAssessmentComponent } from './view-all-assessment/view-all-assessment.component';
import { BrowserModule } from '@angular/platform-browser';
import { ViewAllTrainerComponent } from './view-all-trainer/view-all-trainer.component';
import { TrainerComponent } from './trainer.component';
import { TrainerauthGuard } from '../auth/trainerauth.guard';
import { QuestionUploadComponent } from './question-upload/question-upload.component';
import { PageNotFoundComponent } from '../error/page-not-found/page-not-found.component';

const routes:Routes=[
  {path:"trainer",component:TrainerComponent, canActivate:[TrainerauthGuard] ,
  children:[
    {path:"dashboard",component:DashboardComponent,canActivate:[TrainerauthGuard] },
    {path:"view-all-trainee",component:ViewAllTraineeComponent,canActivate:[TrainerauthGuard] },
    {path:"view-all-batch",component:ViewAllBatchComponent, canActivate:[TrainerauthGuard] },
    {path:"view-all-assessment",component:ViewAllAssessmentComponent, canActivate:[TrainerauthGuard] },
    {path:"view-all-trainer",component:ViewAllTrainerComponent, canActivate:[TrainerauthGuard] },
    {path:"question-upload/:id",component:QuestionUploadComponent, canActivate:[TrainerauthGuard]},
    {path:"**",pathMatch:'full',component:PageNotFoundComponent}
  ]
},
{path:"**",pathMatch:'full',component:PageNotFoundComponent}

]

@NgModule({
  declarations: [
    ViewAllBatchComponent,
    ViewAllTraineeComponent,
    ViewAllAssessmentComponent,
    ViewAllTrainerComponent,
    QuestionUploadComponent
  ],
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
    MatSortModule,
    BrowserModule
  ],
  exports: [RouterModule]
})

export class TrainerModule { }
