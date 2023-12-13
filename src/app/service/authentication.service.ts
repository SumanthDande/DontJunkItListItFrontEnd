import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // Replace this with actual authentication logic
  login(username: string, password: string): Observable<boolean> {
    // Simulate authentication (replace with your actual authentication logic)
    const isValidUser = username === 'user' && password === 'password';

    return of(isValidUser).pipe(delay(1000)); // Simulate network delay
  }

  // Add other authentication-related methods as needed
}
