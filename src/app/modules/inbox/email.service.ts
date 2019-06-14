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
  id: string;
  created_at: string;
}

// Pega aqui: https://github.com/CaelumAulas/angular8436

@Injectable()
export class EmailService {
  url = "http://localhost:3200/emails";
  headers = { authorization: localStorage.getItem("TOKEN") };
  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Email[]> {
    return this.httpClient
      .get(this.url, {
        headers: this.headers
      })
      .pipe(
        map((respostaDoServer: IEmailFromServerDTO[]) => {
          const listaDeEmails: Email[] = [];
          respostaDoServer.forEach(emailDoServidor => {
            listaDeEmails.push(
              new Email(
                emailDoServidor.id,
                emailDoServidor.to,
                emailDoServidor.subject,
                emailDoServidor.content,
                emailDoServidor.created_at
              )
            );
          });
          return listaDeEmails;
        })
      );
  }

  // Garante o contrato de que o dado que vem aqui, é o que server espera
  enviar(email: IEmailToServerDTO): Observable<Email> {
    return this.httpClient
      .post(this.url, email, { headers: this.headers })
      .pipe(
        map((respostaDoServer: IEmailFromServerDTO) => {
          return new Email(
            respostaDoServer.id,
            respostaDoServer.to,
            respostaDoServer.subject,
            respostaDoServer.content,
            respostaDoServer.created_at
          );
        })
      );
  }
}
