import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { EmailService } from '../../core/services/email.service';
import { Constants } from '../../shared/constants';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)

  });
  
  constructor(private readonly emailService: EmailService) {}

  onSubmit() {
    if (!this.contactForm.valid) return;

    const { name, email, message } = this.contactForm.value;

    this.emailService.sendEmail(Constants.email, name + " - " + email + ": wants to reach out to u throgh ur website", 
      message ?? '');
  }
}
