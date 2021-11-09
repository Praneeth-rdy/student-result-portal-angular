import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  students = [
    {
      id: 1,
      name: 'Praneeth'
    },
    {
      id: 2,
      name: 'Rajesh'
    },
    {
      id: 3,
      name: 'Ramesh'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
