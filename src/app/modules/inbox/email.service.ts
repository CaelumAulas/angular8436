import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Email } from "./domain/Email";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

interface IEmailToServerDTO {
  to: string;
  subject: string;
  content: string;
}
interface IEmailFromServerDTO extends IEmailToServerDTO {
  created_at: string;
}

@Injectable()
export class EmailService {
  url = "http://localhost:3200/emails";
  headers = { authorization: localStorage.getItem("TOKEN") };
  constructor(private httpClient: HttpClient) {}

  // Garante o contrato de que o dado que vem aqui, é o que server espera
  enviar(email: IEmailToServerDTO): Observable<Email> {
    return this.httpClient
      .post(this.url, email, { headers: this.headers })
      .pipe(
        map((respostaDoServer: IEmailFromServerDTO) => {
          return new Email(
            respostaDoServer.to,
            respostaDoServer.subject,
            respostaDoServer.content,
            respostaDoServer.created_at
          );
        })
      );
  }
}
