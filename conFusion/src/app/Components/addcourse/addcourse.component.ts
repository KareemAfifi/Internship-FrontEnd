import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {CoursesServiceService} from '../../Services/courses-service/courses-service.service';
import {Course} from '../../Model/Course';
import {FormsModule} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.scss']
})
export class AddcourseComponent implements OnInit {
  coursetobeadded:Course ={ 
    coursename:'',
    credithours: 0,
    depid:0 
  };



  coursenumber:number =0;
  
  constructor(private service:CoursesServiceService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  addcourse(){
    console.log(this.coursenumber);
    //this.service.addcourse(this.coursetobeadded) ;
    this.service.addcourse(this.coursetobeadded).subscribe(res=>{
      console.log("Success "+res);
      this.showsuccess(); 
     },err=>{
       console.log("Error Here");
      console.log(err);
     })

  }

  showsuccess(){
    let snackBarRef=  this.snackbar.open("Course Added Successfully",'',{duration:2000});

  }


  



  

}
