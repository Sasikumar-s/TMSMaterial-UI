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
import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HrComponent } from './hr.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewAllTmComponent } from './view-all-tm/view-all-tm.component';
import { NewTmUploadComponent } from './new-tm-upload/new-tm-upload.component';
import { ViewAllTrainerComponent } from './view-all-trainer/view-all-trainer.component';
import { NewTrainerUploadComponent } from './new-trainer-upload/new-trainer-upload.component';
import { ViewAllTraineeComponent } from './view-all-trainee/view-all-trainee.component';
import { NewTraineeUploadComponent } from './new-trainee-upload/new-trainee-upload.component';
import { MatSortModule } from '@angular/material/sort';
import { ViewAllAssessmentComponent } from './view-all-assessment/view-all-assessment.component';
import { HrauthGuard } from '../auth/hrauth.guard';



const routes:Routes=[
  {path:"hr",component:HrComponent, canActivate:[HrauthGuard],
  children:[
    {path:"dashboard",component:DashboardComponent, canActivate:[HrauthGuard]},
    {path:"view-all-tm",component:ViewAllTmComponent, canActivate:[HrauthGuard]},
    {path:"new-tm-upload",component:NewTmUploadComponent, canActivate:[HrauthGuard]},
    {path:"new-trainer-upload",component:NewTrainerUploadComponent, canActivate:[HrauthGuard]},
    {path:"view-all-trainer",component:ViewAllTrainerComponent, canActivate:[HrauthGuard]},
    {path:"view-all-trainee",component:ViewAllTraineeComponent, canActivate:[HrauthGuard]},
    {path:"new-trainee-upload",component:NewTraineeUploadComponent, canActivate:[HrauthGuard]},
    {path:"vieew-all-assessment",component:ViewAllAssessmentComponent, canActivate:[HrauthGuard]}
  ]
}

]



@NgModule({
  declarations: [
    ViewAllTmComponent,
    NewTmUploadComponent,
    ViewAllTrainerComponent,
    NewTrainerUploadComponent,
    ViewAllTraineeComponent,
    NewTraineeUploadComponent,
    ViewAllAssessmentComponent
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
    MatSortModule
    
  ],
  exports: [RouterModule]
})
export class HrModule { }
