import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: any;
  password: any;
  invalidCredential: any;

  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    const body = {
      username: this.username,
      password: this.password
    };

    this.http.post<any>('https://dummyjson.com/auth/login', body).subscribe(
      (response) => {
        if(response)
        // Save the token in local storage
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', response.username);

        // Redirect to the /about page
        this.router.navigate(['/dashboard']);
        
      },
      (error) => { // if login failed
        console.error(error);
        this.invalidCredential = true;
      }
    );
  }
}
