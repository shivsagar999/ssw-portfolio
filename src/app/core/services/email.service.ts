import { Injectable } from "@angular/core";

@Injectable ({
    providedIn: "root"
})

export class EmailService {


    public sendEmail(recipient: string, subject: string, body: string): void {
        try {
   
          // Construct mailto link
          const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

          // Attempt to open the email client
          window.location.href = mailtoLink;
        } catch (error) {
          console.error('Failed to open email client:', error);
          alert('There was an issue attempting to open your email client. Please ensure your email client is properly configured.');
        }
      }
}