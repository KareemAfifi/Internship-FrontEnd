import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router,ActivatedRoute , NavigationExtras } from '@angular/router';
import {Course} from '../../Model/Course'; 
import {CoursesServiceService} from '../../Services/courses-service/courses-service.service';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.scss']
})
export class EditcourseComponent implements OnInit {
  
  coursetobeupdated:Course ={
    courseid:0,
    coursename:'',
    credithours: 0,
    depid:0 
  }

 // coursetobeupdated :any;

  constructor(private service:CoursesServiceService,private activatedRoute:ActivatedRoute , private router:Router,private snackbar:MatSnackBar) {

   }

  ngOnInit(): void {
    console.log(history.state.course);
    this.coursetobeupdated=history.state.course; 
    
  }

  

  updatecourse(course:Course){
    this.service.updatecourse(course).subscribe(res=>{
      console.log('Success Update'+res);
      this.showsuccess();
    })

  }
  setcoursetobeupdated(course:Course){
    this.coursetobeupdated.courseid=course.courseid;
    this.coursetobeupdated.coursename=course.coursename;
    this.coursetobeupdated.credithours=course.credithours;
    this.coursetobeupdated.depid=course.depid;
  }

  showsuccess(){
    let snackBarRef=  this.snackbar.open("Course Edited Successfully",'',{duration:2000});

  }
    

}
