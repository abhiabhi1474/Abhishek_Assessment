import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'http://localhost:8080/api/users';


  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.baseUrl);
  }

  createUser(user: User) {

    const payload = {
      name: user.name,
      email: user.email,
      age: user.age
    };
    return this.http.post(this.baseUrl, payload);
  }
  checkEmail(email: string) {
  return this.http.get<boolean>(`http://localhost:8080/api/users/email/${email}`);
}
  
}
