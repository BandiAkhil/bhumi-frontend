import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'api/admin/users';

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  getUserById(userId: number | string) {
    return this.http.get<User>(`${this.baseUrl}/${userId}`);
  }

  createUser(user: User) {
    return this.http.post<User>(`${this.baseUrl}`, user);
  }

  updateUser(userId: number | string, user: User) {
    return this.http.put<User>(`${this.baseUrl}/${userId}`, user);
  }

  deleteUser(userId: number | string) {
    return this.http.delete<User>(`${this.baseUrl}/${userId}`);
  }
}
