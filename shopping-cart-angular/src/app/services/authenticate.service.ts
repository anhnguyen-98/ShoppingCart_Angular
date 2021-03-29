import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  login(user_login_info: any):Observable<any> {
    return this.http.post( `${baseUrl}/auth/login`, [user_login_info])
  }
}
