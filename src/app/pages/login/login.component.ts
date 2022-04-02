import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  badCredentials: boolean =false;
  credentials:any = {};

  //username: string='';
  //password: string='';

  constructor(private loginService: LoginService, 
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  togglebadCredentials(): void {
    this.badCredentials = !this.badCredentials;
  }

  login() {
    console.log('Enviar datos', this.credentials);
    this.loginService.login(this.credentials).subscribe({
      next: (value) => {
        this.authService.save(value);
      },
      complete: () => {
        this.router.navigate(['/home']);
      },
      error: (err) => {console.error(err)
        this.togglebadCredentials();
      }
    });

    
  }
}
