import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'student-portal';

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  logout = () => {
    localStorage.removeItem('authToken');
    this._router.navigate(['/login']);
  }
}
