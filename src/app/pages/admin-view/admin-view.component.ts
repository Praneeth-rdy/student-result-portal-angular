import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from 'src/app/result.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  students = [
    {
      name: '',
      registration_number: '',
      Subjects: []
    }
  ];

  allStudents = [
    {
      name: '',
      registration_number: '',
      Subjects: []
    }
  ];

  searchField = '';

  constructor(private _result: ResultService, private _router: Router) { }

  ngOnInit(): void {
    this._result.getAllStudents()
      .subscribe({
        next: res => {
          console.log(JSON.parse(res.users))
          this.students = JSON.parse(res.users);
          this.allStudents = JSON.parse(res.users);
        },
        error: err => console.log(err)
      })
  }

  deleteResult(registration_number: any) {
    this._result.deleteResult(registration_number)
      .subscribe({
        next: res => {
          console.log(res)
        },
        error: err => {
          console.log(err)
        }
      })
  }

  editResult(registration_number: any) {
    this._router.navigate([`/results/${registration_number}`]);
  }

  search() {
    this.students = this.allStudents.filter((student) => {
      return student.registration_number.toString().includes(this.searchField);
    })
  }

}
