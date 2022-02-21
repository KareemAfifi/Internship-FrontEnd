import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { CoursesComponent } from '../Components/courses/courses.component';
import { AddcourseComponent } from '../Components/addcourse/addcourse.component';
import { EditcourseComponent } from '../Components/editcourse/editcourse.component';
import { EnrollcourseComponent } from '../Components/enrollcourse/enrollcourse.component';

const routes: Routes = [{ path: 'courses', component: CoursesComponent}, 
{ path: 'addcourse', component: AddcourseComponent },
{ path: '', redirectTo: 'courses', pathMatch: 'full' },
{path:'editcourse' , component:EditcourseComponent} ,
{path:'enrollcourse' , component:EnrollcourseComponent} 

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
