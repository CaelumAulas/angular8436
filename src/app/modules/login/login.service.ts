import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";

interface ILoggedUserData {
  token: string;
}

@Injectable()
export class LoginService {
  constructor(private httpClient: HttpClient) {}
  logar(email: string, password: string) {
    return this.httpClient
      .post("http://localhost:3200/login", { email, password })
      .pipe(
        map((respostaDoServer: ILoggedUserData) => {
          localStorage.setItem("TOKEN", respostaDoServer.token);
        })
      );
  }
}
