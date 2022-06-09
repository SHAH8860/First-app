import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})



export class ReactiveFormComponent implements OnInit {
  ngOnInit(): void {
    
  }
   
  
  public loginForm: FormGroup|any 
  constructor(private router:Router, private formBuilder:FormBuilder) {  
    this.loginForm=this.formBuilder.group({ 
      email: ['',Validators.required], 
      password: ['',Validators.required] 
 
    }) 
  } 
  get email(){return this.loginForm.get("email");} 
  get password(){return this.loginForm.get("password");} 
 


 
  loginReactiveApproach():void{ 
    let userdata=this.loginForm.value; 
    console.log(userdata); 
    if(userdata.email !== "abc@gmail.com"){ 
          this.loginForm.controls['email'].setErrors({'incorrect':true}); 
    }  
    else if(userdata.password!== "123456"){ 
      this.loginForm.controls['password'].setErrors({'incorrect':true}); 
      } 
    else if(userdata.email === 'abc@gmail.com' && userdata.password === '123456'){ 
     this.router.navigate(['private']); 
    } 

  } 
}


