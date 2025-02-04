import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  successMessage: string = '';

  constructor(private router: Router) {}

  onRegister() {
    // Example registration logic - replace with actual registration service call
    if (this.name && this.email && this.password) {
      // Simulate successful registration
      localStorage.setItem('registeredEmail', this.email); // Store email in local storage for demo
      this.successMessage = 'Registration Successful! You can now log in with this email.';
      setTimeout(() => {
        this.router.navigate(['/login']); // Redirect to login page after registration
      }, 2000); // Redirect after 2 seconds
    } else {
      this.successMessage = 'Please fill all the fields.';
    }
  }
}
