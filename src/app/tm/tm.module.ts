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
import { TmComponent } from './tm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSortModule } from '@angular/material/sort';
import { ViewAllBatchComponent } from './view-all-batch/view-all-batch.component';
import { NewBatchUploadComponent } from './new-batch-upload/new-batch-upload.component';
import { ViewAllTraineeComponent } from './view-all-trainee/view-all-trainee.component';
import { ViewAllAssessmentComponent } from './view-all-assessment/view-all-assessment.component';
import { NewAssessmentUploadComponent } from './new-assessment-upload/new-assessment-upload.component';
import { BrowserModule } from '@angular/platform-browser';
import { ViewAllTrainerComponent } from './view-all-trainer/view-all-trainer.component'

const routes:Routes=[
  {path:"tm",component:TmComponent,
  children:[
    {path:"dashboard",component:DashboardComponent},
    {path:"view-all-trainee",component:ViewAllTraineeComponent},
    {path:"view-all-batch",component:ViewAllBatchComponent},
    {path:"view-all-assessment",component:ViewAllAssessmentComponent},
    {path:"new-batch-upload",component:NewBatchUploadComponent},
    {path:"new-assessment-upload",component:NewAssessmentUploadComponent},
    {path:"vieew-all-trainer",component:ViewAllTrainerComponent}
  ]
}

]

@NgModule({
  declarations: [
    ViewAllBatchComponent,
    NewBatchUploadComponent,
    ViewAllTraineeComponent,
    ViewAllAssessmentComponent,
    NewAssessmentUploadComponent,
    ViewAllTrainerComponent
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
export class TmModule { }
