import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IRegister{
  name: string,
  email: string, 
  password: string,
  role:number,
  group:number
}

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  constructor(private http: HttpClient) { }

  register(body:any): Observable<any>{
    return this.http.post('http://localhost:3000/api/users/register',body, {responseType: 'text'});
  }
}

