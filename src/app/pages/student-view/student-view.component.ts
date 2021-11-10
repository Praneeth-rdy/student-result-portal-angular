import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/result.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  name = ''
  subjects = [
    {
      code: '',
      name: '',
      user_subject: {
        semester_number: 0,
        marks: 0,
        max_marks: 0,
        remarks: ''
      }
    }
  ]
  constructor(private _result: ResultService) { }

  ngOnInit(): void {
    this._result.getMyResult()
    .subscribe({
      next: res => {
        this.subjects = JSON.parse(res.userData).Subjects;
        this.name = JSON.parse(res.userData).name;
      },
      error: err => {
        console.log(err)
      },
    })
  }

}
