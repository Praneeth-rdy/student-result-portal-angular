import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/result.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  name = 'Rajesh'
  subjects = [
    {
      code: 'SBAA1603',
      name: 'temp',
      user_subject: {
        semester_number: 4,
        marks: 89,
        max_marks: 100,
        remarks: 'pass'
      }
    },
    {
      code: 'SBAA1602',
      name: 'temp',
      user_subject: {
        semester_number: 4,
        marks: 89,
        max_marks: 100,
        remarks: 'pass'
      }
    },
  ]
  constructor(private _result: ResultService) { }

  ngOnInit(): void {
    this._result.getMyResult()
    .subscribe({
      next: res => {
        console.log(JSON.parse(res.userData));
        this.subjects = JSON.parse(res.userData).subjects;
        this.name = JSON.parse(res.userData).name;
      },
      error: err => {
        console.log(err)
      },
    })
  }

}
