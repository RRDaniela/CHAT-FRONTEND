import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms' 
import { RegisterService } from 'src/app/shared/services/register.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  showPassword: boolean = false;

  form: FormGroup;

  credentials:any = {};

  constructor(private formBuilder: FormBuilder, private registerService:RegisterService, private authService: AuthService,
    private router: Router) {
    this.form = this.formBuilder.group({
      'name':['', Validators.required],
      'username': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'password':['', [Validators.required, Validators.minLength(8)]],
      'confirm':['', [Validators.required, Validators.minLength(8)]],
      'terms':[false, Validators.requiredTrue]
    },
      {
        validators: 
          [this.matchPasswords.bind(this)]
        //validaciones asíncronas, ver si el usuario ya existe en la base de datos
      });
   }

  ngOnInit(): void {
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  //submit
  sendData(){
    //enviar datos
    if(this.form.valid){
      console.log("Register user", this.form.value);
      this.registerService.register(this.form.value).subscribe({
        next: (value) => {
          console.log(value)
        },
        complete: () => {
          this.router.navigate(['/login']);
        },
        error: (err) => console.error(err)
      });
    
    }else{
    //datos incompletos
      console.log('error, faltan datos.', this.form)
    }
  }

  register(){
    
  }

  matchPasswords(){
    if (!this.form) return;
    const {password, confirm} = this.form.getRawValue();
    if(password === confirm){
      return null;
    }else{
      return {passwordMismatch:true}
    }
  }
}
