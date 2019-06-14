export class Email {
  to: string;
  subject: string;
  body: string;
  creationDate: string;

  constructor(to, subject, body, creationDate) {
    this.to = to;
    this.subject = subject;
    this.body = body;
    this.creationDate = creationDate;
  }
}
