import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import {Observable} from 'rxjs' ;

import {Router} from '@angular/router' ;

import {Course} from '../../Model/Course'



@Injectable({
  providedIn: 'root'
})
export class CoursesServiceService {
  private readonly apiurl:string = 'https://localhost:44324/api/' ;
  
  constructor(private http:HttpClient ) { 

  }

  getallcourses() : Observable<Course[]>{
    console.log(this.http.get(this.apiurl+'courses/getavailablecourses'));
    return this.http.get<Course[]>(this.apiurl+'courses/getavailablecourses') ;
  }

  addcourse(course:any) : Observable<any>{
    console.log(course);
    return this.http.post( this.apiurl+'courses/addcourse',course);
  }

  deletecourse(id:number) :Observable<any>{
    return this.http.delete(this.apiurl+'courses/deletecoursebyid/'+id);
    
  }

  updatecourse(course:Course) :Observable<any>{
    return this.http.put(this.apiurl+"courses/updatecourse" , course);
  }

  updatecourseinfo(course:Course) :Observable<any>{
    return this.http.put(this.apiurl+"courses/updatecourse" , course);
  }

}
