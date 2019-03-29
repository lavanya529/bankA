import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes),
    FormsModule
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
