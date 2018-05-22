import { SignupComponent } from './../signup/signup.component';
import { SigninComponent } from './../signin/signin.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const paths: Routes = [
  {path: '', pathMatch: 'full', component: SigninComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(paths)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RouteModule { }