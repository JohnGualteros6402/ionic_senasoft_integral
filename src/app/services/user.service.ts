
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = 'http://localhost:8081/api/v1/users';

  constructor(private httpClient: HttpClient) {}

  // eslint-disable-next-line @typescript-eslint/ban-types
  addUser(user: User): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, user);
  }
  getListUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }
  // Validation Users (LoginComponent)
  // eslint-disable-next-line @typescript-eslint/ban-types
  validationUser(email: string, password: string): Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/${email}/${password}`);
  }
}
