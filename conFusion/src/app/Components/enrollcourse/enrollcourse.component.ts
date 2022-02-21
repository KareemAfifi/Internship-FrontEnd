import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Model/Student';

import { StudentsServiceService } from '../../Services/students-service/students-service.service';
import { InstructorteachescourseServiceService } from '../../Services/instructorteachescourse-service/instructorteachescourse-service.service';
import { EnrollServiceService } from 'src/app/Services/enroll-service/enroll-service.service';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { InstructorTeachesCourse } from 'src/app/Model/InstructorTeachesCourse';
import { Instructor } from 'src/app/Model/Instructor';
import { Enroll } from '../../Model/Enroll';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-enrollcourse',
  templateUrl: './enrollcourse.component.html',
  styleUrls: ['./enrollcourse.component.scss']
})
export class EnrollcourseComponent implements OnInit {
  
  courseid:number = 0 ; 
  studentid:any = 0 ; 
  instid:any= 0 ; 
  enroll:Enroll = {
    courseid:0,
    studentid:0,
    instid:0 
  };
  listofstudents :Array<Student> = [];
  listofinstructors :Array<Instructor> = []; // Here


  constructor(private instservice:InstructorteachescourseServiceService,private studentservice:StudentsServiceService 
   ,private instructorteachescourseservice:InstructorteachescourseServiceService,private enrollservice:EnrollServiceService,
   private toastr:ToastrService , private snackBar:MatSnackBar ) {}
   
  ngOnInit(): void {
    this.studentservice.getallstudents().subscribe((res:any) =>{
      console.log(res);
      this.listofstudents=res;
      
    });
    this.courseid=history.state.coursenumber;
    console.log(this.courseid);
    this.instructorteachescourseservice.getinstructorsofcourse(this.courseid).subscribe((res:any) =>{
      console.log(res);
      this.listofinstructors=res;
    }) ;
  
  }

  savestudentid( s :Student){
    console.log(s.studentid);
    this.studentid= s.studentid;
  }
  saveinstid( s :Instructor){
    console.log(s.instid);
    this.instid= s.instid;
  }

  savetoenroll(){
    this.enroll.courseid=this.courseid;
    this.enroll.studentid=this.studentid;
    this.enroll.instid=this.instid;
    this.enrollservice.addtoenroll(this.enroll).subscribe(res=>{
      console.log('Enrolled Succesfully' + res);
     // this.savedsuccessfully();
     this.showsuccess();
    })

  }

  showsuccess(){
    let snackBarRef=  this.snackBar.open("Student Enrolled Successfully",'',{duration:2000});

  }







}
