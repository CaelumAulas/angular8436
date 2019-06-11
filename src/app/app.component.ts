import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cmail - O Email mais showzao';

  emails = [];

  email = {
    to: '',
    subject: '',
    body: ''
  };

  isNewEmailFormOpen = true;

  toggleNewEmailForm() {
    this.isNewEmailFormOpen = !this.isNewEmailFormOpen;
  }

  sendEmail(formEmail: NgForm) {

    console.log(formEmail)

    // Funcional/Imutabilidade
    // Spread Operator
    this.emails.push({ ...this.email });
    this.email = {
      to: '',
      subject: '',
      body: ''
    };
  }
}
