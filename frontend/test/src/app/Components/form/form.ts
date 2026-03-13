import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../../Service/user-service';
import { Validation } from "../validation/validation";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, Validation],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {

  constructor(private service: UserService) {}

  user: User = {
    id: 0,
    name: '',
    email: '',
    age: 0
  };


  submit() {
    const namePattern = /^[A-Za-z ]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!namePattern.test(this.user.name) || !emailPattern.test(this.user.email)) {
      alert('Enter a valid name and email!');
   } 
    else{

    this.service.checkEmail(this.user.email).subscribe(exists => {
      if (exists) {
        alert("Email already registered!");
      } else {
        this.service.createUser(this.user).subscribe(() => {
          alert('User created successfully!');
          this.user = { id: 0, name: '', email: '', age: 0 };
        });
      }

    });
  }

  }
}