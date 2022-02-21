import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations' ;
import {MatToolbarModule} from '@angular/material/toolbar'
import {FlexLayoutModule} from '@angular/flex-layout' ;
import {MatListModule} from '@angular/material/list' ;
import {MatGridListModule} from '@angular/material/grid-list' ;
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http' ;
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from '../app/app-routing/app-routing.module';
import { MatInputModule } from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog'
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';
import { from } from 'rxjs';
import 'hammerjs' ;

import { AppComponent } from './app.component';
import { CoursesComponent } from '../app/Components/courses/courses.component';
import { AddcourseComponent } from '../app/Components/addcourse/addcourse.component';
import { EditcourseComponent } from './Components/editcourse/editcourse.component';
import { EnrollcourseComponent } from './Components/enrollcourse/enrollcourse.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';


//import {CoursesServiceService} from '../app/Services/courses-service.service';

@NgModule({
  declarations: [
    AppComponent, CoursesComponent, AddcourseComponent, EditcourseComponent, EnrollcourseComponent, DialogExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule , 
    MatToolbarModule, 
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    AppRoutingModule
    ,MatInputModule,
    FormsModule,MatTableModule,
    MatSelectModule,
    ToastrModule.forRoot()  ,
    MatSnackBarModule,
    MatDialogModule,
    CdkTableModule,MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
