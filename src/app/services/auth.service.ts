import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, Token } from '../models/auth.interface';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ClientService {

  login(loginForm: Login) : Observable<any> {
    return this.http.post<Token>(`${this.apiUrl}/auth/login`, loginForm).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/news']);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

}
