import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import {Router} from '@angular/router';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService, private authService: AuthService, private router: Router) {
    if(!this.authService.isLoggedIn()){
      this.router.navigate(['/login']);
    }}
  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      console.log('response ', response);
      this.users = response;
    })
  }

}
