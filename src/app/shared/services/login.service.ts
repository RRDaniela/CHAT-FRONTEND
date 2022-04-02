import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ILogin{
  email: string, 
  password: string,
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  login(body:any): Observable<any>{
    return this.http.post('http://localhost:3000/api/users/login',body, {responseType: 'text'});
  }
}
