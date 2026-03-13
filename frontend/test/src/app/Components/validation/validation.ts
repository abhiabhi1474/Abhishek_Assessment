import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation',
  standalone:true,
  imports: [],
  templateUrl: './validation.html',
  styleUrl: './validation.css',
})
export class Validation {
  @Input() control!: AbstractControl | null;

  getErrorMessage(): string {

    if (!this.control || !this.control.errors || !this.control.touched) {
      return '';
    }


    if (this.control.hasError('required')) {
      return 'This field is required';
    }

    if (this.control.hasError('email')) {
      return 'Invalid email format';
    }

    if (this.control.hasError('pattern')) {
      if (this.control.errors['pattern'].requiredPattern === '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$') {
        return 'Please enter a valid email address';
      }
    
    }
    return '';
  }

}
