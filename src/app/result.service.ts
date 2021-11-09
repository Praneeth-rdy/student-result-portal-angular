import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private _getStudentsUrl = "http://localhost:5050/api/get-all-students";
  private _resultsUrl = "http://localhost:5050/api/results";
  private _myResultUrl = "http://localhost:5050/api/my-result";
  private _deleteResultUrl = "http://localhost:5050/api/results/delete";
  private _updateResultUrl = "http://localhost:5050/api/results/update";

  constructor(private http: HttpClient) { }

  getResults() {
    return this.http.get<any>(this._resultsUrl);
  }

  addResult(resultData: any) {
    return this.http.post<any>(this._resultsUrl, resultData);
  }

  deleteResult(registration_number: any) {
    return this.http.get<any>(this._deleteResultUrl + `?registration_number=${registration_number}`);
  }

  updateResult(resultData: any) {
    return this.http.post<any>(this._updateResultUrl, resultData);
  }

  getMyResult() {
    return this.http.get<any>(this._myResultUrl);
  }

  getAllStudents() {
    return this.http.get<any>(this._getStudentsUrl);
  }
}
