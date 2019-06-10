import { Component } from '@angular/core';

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

  sendEmail(infosDoEvento: Event) {
    infosDoEvento.preventDefault();
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
