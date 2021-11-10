import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    registration_number: '',
    password: '',
  }

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
    if (!!localStorage.getItem('authToken')) {
      if (localStorage.getItem('role') === 'admin') {
        this._router.navigate(['/results']);
      } else {
        this._router.navigate(['/myresult']);
      }

    }
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe({
        next: res => {
          console.log(res);
          localStorage.setItem('authToken', res.token);
          localStorage.setItem('role', res.role);
          if (res.role === 'admin') {
            this._router.navigate(['/results']);
          } else {
            this._router.navigate(['/myresult']);
          }

        },
        error: err => console.log(err)
      })
  }

}
