import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/Model/Student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsServiceService {
  private readonly apiurl:string = 'https://localhost:44324/api/' ;  

  constructor(private http:HttpClient) { }

  getallstudents(){
  return this.http.get(this.apiurl+'students/getallstudents');

  }
}
