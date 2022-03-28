import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignUpComponent } from './signup/signup.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule {

}
