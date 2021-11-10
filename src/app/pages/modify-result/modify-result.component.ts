import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultService } from 'src/app/result.service';

@Component({
  selector: 'app-modify-result',
  templateUrl: './modify-result.component.html',
  styleUrls: ['./modify-result.component.css']
})
export class ModifyResultComponent implements OnInit {

  resultData = {
    name: '',
    registration_number: '',
    result: [
      {
        "code": "",
        "semester_number": 0,
        "marks": 0,
        "max_marks": 0,
        "remark": "fail"
      }
    ]
  }

  public resultId: Number | null | undefined;
  constructor(private route: ActivatedRoute, private _result: ResultService, private _router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.resultId = id !== null ? parseInt(id) : null;
    this._result.getStudentData(this.resultId)
      .subscribe({
        next: res => {
          this.resultData = JSON.parse(res.userData)
        },
        error: err => console.log(err)
      })
  }

  updateResult() {
    this._result.updateResult(this.resultData)
      .subscribe({
        next: res => console.log(res),
        error: err => console.log(err)
      });
    this._router.navigate(['/results']);
  }

}
