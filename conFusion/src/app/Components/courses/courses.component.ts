import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { Course} from '../../Model/Course' ;
import {MatTableModule} from '@angular/material/table';
import {CoursesServiceService} from '../../Services/courses-service/courses-service.service';
import {Router,NavigationExtras} from '@angular/router';
import {MatDialog} from '@angular/material/dialog'
import { DialogExampleComponent } from 'src/app/dialog-example/dialog-example.component';
import { MatPaginator } from '@angular/material/paginator';

const COURSES :Course[]=[
  {
    courseid:3 , 
    coursename:'Algebra' ,
    credithours:4,
    depid:1

  },
  {
    courseid:4 , 
    coursename:'Geometry' ,
    credithours:4,
    depid:1

  },
  {
    courseid:5 , 
    coursename:'Astronomy' ,
    credithours:2,
    depid:3

  },
  {
    courseid:6 , 
    coursename:'Grammer' ,
    credithours:10,
    depid:2

  },
  {
    courseid:7 , 
    coursename:'TestCourse' ,
    credithours:4,
    depid:1

  }

]
@Component({
  selector: 'app-course',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  Courses: Course[]; 
  displayedColumns=["Course Id" , "Course Name" , 'Course CreditHours' , 'Course Dep',"Buttons"];
  dataSource:any;
  coursetobedeleted:Course ={ 
    courseid:0,
    coursename:'',
    credithours: 0,
    depid:0 
  };
 
 
  
  constructor(private service:CoursesServiceService,private router:Router,private MatDialog:MatDialog, 
    private MatTable:MatTableModule
) { 
    this.Courses=[];
  }

  ngOnInit(): void {
   //this.Courses=this.service.getallcourses();
   this.service.getallcourses().subscribe(res=>{
     console.log(res);
    this.Courses=res;
    this.dataSource=this.Courses;
   
    })
   

  }
  deletecourse(course:Course){
    if(course.courseid!=null){
    this.service.deletecourse(course.courseid).subscribe(res=>{
      console.log('Success'+res);
      this.service.getallcourses().subscribe(res=>{
        this.Courses=res;
        this.dataSource=this.Courses;
       })
    })
    }
    
  }

  sendtobeupdated(course:Course){
   // let NavigationExtras:NavigationExtras = {state :{course:course}};
    let NavigationExtras:NavigationExtras = {state :{course:course}};
    let NavigationExtras2:NavigationExtras = {state :{coursenumber:course.courseid}};
    
    this.router.navigate(['/editcourse'],NavigationExtras) ;
    this.router.navigate(['/enrollcourse'],NavigationExtras2);

  }
  sendtobeedited(course:Course){
    // let NavigationExtras:NavigationExtras = {state :{course:course}};
     let NavigationExtras:NavigationExtras = {state :{course:course}};
    
     
     this.router.navigate(['/editcourse'],NavigationExtras) ;

 
   }
 
  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }


  checkdelete(course:Course){
   let dialogref= this.MatDialog.open(DialogExampleComponent) ;
   dialogref.afterClosed().subscribe(result=>{
     if(result==='delete')
      this.deletecourse(course);
   })

  }

    
  

}
