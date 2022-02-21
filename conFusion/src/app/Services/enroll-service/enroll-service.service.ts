import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EnrollServiceService {
  private readonly apiurl:string = 'https://localhost:44324/api/' ;
  constructor(private http:HttpClient) { }


  addtoenroll(newenrolled:any):Observable<any>{
  return this.http.post(this.apiurl+"enrolls" , newenrolled);

  }
}
