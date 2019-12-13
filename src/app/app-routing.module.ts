import { ViewreportComponent } from './pages/doctor/viewreport/viewreport.component';
import { GivefeedbackComponent } from './pages/patient/givefeedback/givefeedback.component';
import { AgenthomeComponent } from './pages/agent/agenthome/agenthome.component';
import { TestresultsComponent } from './pages/doctor/testresults/testresults.component';
import { ViewappointmentsComponent } from './pages/doctor/viewappointments/viewappointments.component';
import { DoctorhomeComponent } from './pages/doctor/doctorhome/doctorhome.component';
import { BookappointmentformComponent } from './pages/patient/bookappointment/bookappointmentform/bookappointmentform.component';
import { ChoosedoctorsComponent } from './pages/patient/bookappointment/choosedoctors/choosedoctors.component';
import { ViewappointmentstatusComponent } from './pages/patient/viewappointmentstatus/viewappointmentstatus.component';
import { ViewappointmenthistoryComponent } from './pages/patient/viewappointmenthistory/viewappointmenthistory.component';
import { AddMedicareComponent } from './pages/admin/add-medicare/add-medicare.component';
import { ManageagentComponent } from './pages/admin/manageagent/manageagent.component';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { ManagedoctorComponent } from './pages/admin/managedoctor/managedoctor.component';
import { SignupdoctorComponent } from './site/signupdoctor/signupdoctor.component';
import { SignuppatientComponent } from './site/signuppatient/signuppatient.component';
import { SignupadminComponent } from './site/signupadmin/signupadmin.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagepatientComponent } from './pages/admin/managepatient/managepatient.component';
import { AddagentComponent } from './pages/admin/manageagent/addagent/addagent.component';
import { ManagemedicareComponent } from './pages/admin/managemedicare/managemedicare.component';
import { PatienthomeComponent } from './pages/patient/patienthome/patienthome.component';
import { BookappointmentComponent } from './pages/patient/bookappointment/bookappointment.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { AgentPatientsComponent } from './pages/agent/agent-patients/agent-patients.component';
import { TestResultFormComponent } from './pages/doctor/test-result-form/test-result-form.component';
import { ViewTestResultComponent } from './pages/patient/view-test-result/view-test-result.component';
import { AuthGuardService } from './service/authguard.service';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'signup-admin', component: SignupadminComponent },
  { path: 'signup-patient', component: SignuppatientComponent },
  { path: 'signup-doctor', component: SignupdoctorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/manage-doctors', component: ManagedoctorComponent, canActivate: [AuthGuardService] },
  { path: 'admin/manage-patients', component: ManagepatientComponent, canActivate: [AuthGuardService] },
  { path: 'admin/manage-agent', component: ManageagentComponent, canActivate: [AuthGuardService] },
  { path: 'admin/manage-agent/add-agent', component: AddagentComponent, canActivate: [AuthGuardService] },
  { path: 'admin/home', component: AdminhomeComponent, canActivate: [AuthGuardService] },
  { path: 'admin/manage-medicare', component: ManagemedicareComponent, canActivate: [AuthGuardService] },
  { path: 'admin/manage-medicare/add-medicare', component: AddMedicareComponent, canActivate: [AuthGuardService] },
  { path: 'patient/home', component: PatienthomeComponent, canActivate: [AuthGuardService] },
  { path: 'patient/bookappointment', component: BookappointmentComponent, canActivate: [AuthGuardService] },
  { path: 'patient/bookappointment/choosedoctors/:id', component: ChoosedoctorsComponent, canActivate: [AuthGuardService] },
  { path: 'patient/viewappointmenthistory', component: ViewappointmenthistoryComponent, canActivate: [AuthGuardService] },
  { path: 'patient/viewappointmentstatus', component: ViewappointmentstatusComponent, canActivate: [AuthGuardService] },
  { path: 'patient/bookappointment/bookappointmentform/:medId/:docId', component: BookappointmentformComponent, canActivate: [AuthGuardService] },
  { path: 'doctor/home', component: DoctorhomeComponent, canActivate: [AuthGuardService] },
  { path: 'doctor/viewappointments', component: ViewappointmentsComponent, canActivate: [AuthGuardService] },
  { path: 'doctor/testresults', component: TestresultsComponent, canActivate: [AuthGuardService] },
  { path: 'getstarted', component: GetstartedComponent },
  { path: 'agent/home', component: AgenthomeComponent, canActivate: [AuthGuardService] },
  { path: 'agent/appointments', component: AgentPatientsComponent, canActivate: [AuthGuardService] },
  { path: 'doctor/testresults/testresultform/:id', component: TestResultFormComponent, canActivate: [AuthGuardService] },
  { path: 'doctor/testresults/viewreport/:id', component: ViewreportComponent, canActivate: [AuthGuardService] },
  { path: 'patient/viewappointmenthistory/viewtestresult/:id', component: ViewTestResultComponent, canActivate: [AuthGuardService] },
  { path: 'patient/testresults/givefeedback/:id', component: GivefeedbackComponent, canActivate: [AuthGuardService] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
