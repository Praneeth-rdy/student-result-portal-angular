import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { StudentViewComponent } from './pages/student-view/student-view.component';
import { AdminViewComponent } from './pages/admin-view/admin-view.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { ModifyResultComponent } from './pages/modify-result/modify-result.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentViewComponent,
    AdminViewComponent,
    LayoutComponent,
    ResultCardComponent,
    ModifyResultComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
