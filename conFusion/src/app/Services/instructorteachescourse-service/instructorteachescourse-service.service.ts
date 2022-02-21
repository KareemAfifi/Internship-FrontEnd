import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorteachescourseServiceService {
  private readonly apiurl:string = 'https://localhost:44324/api/' ;
  constructor( private http:HttpClient) { }

  getinstructorsofcourse(id:number) :Observable<any>
  {
    return this.http.get<string>(this.apiurl+"instructorteachescourse/getinstructorsofcourse/"+id) ;
  }

}
