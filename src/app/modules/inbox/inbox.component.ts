import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

interface IEmail {
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

  emails: IEmail[] = [];

  email: IEmail = {
    to: "teate@gmail.com",
    subject: "Assunto",
    body: "alo alo"
  };

  isNewEmailFormOpen = true;

  toggleNewEmailForm() {
    this.isNewEmailFormOpen = !this.isNewEmailFormOpen;
  }

  sendEmail(formEmail: NgForm) {
    if (formEmail.valid) {
      this.emails.push({
        body: formEmail.form.value.conteudo,
        subject: formEmail.form.value.assunto,
        to: formEmail.form.value.para
      });
      formEmail.resetForm();
    } else {
      alert("Deixa de ser espertinho");
    }
  }
}
