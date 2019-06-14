import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { EmailService } from "./email.service";
import { Email } from "./domain/Email";

// Props do componente
interface IEmailFromView {
  to: string;
  subject: string;
  body: string;
}

@Component({
  selector: "cmail-inboxpage",
  templateUrl: "./inbox.component.html"
})
export class InboxComponent {
  title = "Cmail - O Email mais showzao";

  emails: Email[] = [];

  email: IEmailFromView = {
    to: "omariosouto@cmail.com",
    subject: "Teste",
    body: "Corpo do email"
  };

  isNewEmailFormOpen = true;

  constructor(private emailService: EmailService) {}

  toggleNewEmailForm() {
    this.isNewEmailFormOpen = !this.isNewEmailFormOpen;
  }

  sendEmail(formEmail: NgForm) {
    if (formEmail.valid) {
      this.emailService
        .enviar({
          content: this.email.body,
          subject: this.email.subject,
          to: this.email.to
        })
        .subscribe(
          (email: Email) => {
            this.emails.push(email);
          },
          err => {
            console.log(err);
          }
        );
      formEmail.resetForm();
    } else {
      alert("Deixa de ser espertinho");
    }
  }
}
