import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './pages/admin-view/admin-view.component';
import { LoginComponent } from './pages/login/login.component';
import { ModifyResultComponent } from './pages/modify-result/modify-result.component';
import { StudentViewComponent } from './pages/student-view/student-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'myresult', component: StudentViewComponent },
  { path: 'results', component: AdminViewComponent },
  // Modify result page dynamic routing
  { path: 'results/:id', component: ModifyResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
