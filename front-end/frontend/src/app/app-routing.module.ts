import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HelloWorldComponent} from "./sample-calculator/hello-world.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path:'hello-world', component: HelloWorldComponent},
  {path:'', component: HelloWorldComponent},
  {path:'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
