import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsesrList() {
   return this.http.get('../assets/user.json')
  }
}
