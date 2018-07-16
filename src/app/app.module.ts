import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RoutingRoutes } from './routing.routing';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RestClientService } from './_services/rest-client.service';
import { WorkoutComponent } from './workout/workout.component';
import { CategoryComponent } from './category/category.component';
import { MomentModule } from 'ngx-moment';
import { WorkoutPlusComponent } from './workout-plus/workout-plus.component';

@NgModule({
   declarations: [
      AppComponent,
      SigninComponent,
      SignupComponent,
      WorkoutComponent,
      CategoryComponent,
      WorkoutPlusComponent
   ],
   entryComponents: [
       WorkoutPlusComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      MomentModule,
      NgbModule.forRoot(),
      ReactiveFormsModule,
      RoutingRoutes
   ],
   providers: [
      RestClientService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
