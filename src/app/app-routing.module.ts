import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AdminViewComponent } from './pages/admin-view/admin-view.component';
import { LoginComponent } from './pages/login/login.component';
import { ModifyResultComponent } from './pages/modify-result/modify-result.component';
import { RegisterComponent } from './pages/register/register.component';
import { StudentViewComponent } from './pages/student-view/student-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'myresult', component: StudentViewComponent, canActivate: [AuthGuard] },
  { path: 'results', component: AdminViewComponent, canActivate: [AuthGuard] },
  // Modify result page dynamic routing
  { path: 'results/:id', component: ModifyResultComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
