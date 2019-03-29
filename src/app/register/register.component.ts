import { Component, OnInit } from '@angular/core';
import { customer } from '../customer';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForm: FormGroup;
  submitted= false;
  

  constructor(private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      aadharCardNumber: ['', [Validators.required, Validators.minLength(12),Validators.maxLength(12)]],
      panCardNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      mobileNumber: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      address: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }
    // ,{
    //   validator: MustMatch('password', 'confirmPassword')
    // }
    );
  }
  get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
  



  // customer = new customer();
  
  // clickFun(customer:customer){
  //   alert(customer.firstName)
  //   this.router.navigate(['/customer.register'])

  // }

}
