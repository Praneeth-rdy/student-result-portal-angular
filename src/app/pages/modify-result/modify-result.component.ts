import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-result',
  templateUrl: './modify-result.component.html',
  styleUrls: ['./modify-result.component.css']
})
export class ModifyResultComponent implements OnInit {

  public resultId: Number | null | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.resultId = id !== null ? parseInt(id) : null;
  }

}
