import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Example login logic - replace with actual authentication service call
    const registeredEmail = localStorage.getItem('registeredEmail');
    if (this.email === registeredEmail) {
      // Simulate successful login
      this.successMessage = 'Login Successful!';
      setTimeout(() => {
        this.router.navigate(['/home']); // Redirect to home page after login
      }, 2000); // Redirect after 2 seconds
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }
}
