import { Injectable } from '@angular/core';
import { User } from '../interfaces/user'
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users:User[] = [
      {name: 'John Doe', email:'johndoe@email.com'},
      {name: 'Jane Doe', email:'janedoe@email.com'}
  ]
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any>{
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient.get(url);
  }
}
