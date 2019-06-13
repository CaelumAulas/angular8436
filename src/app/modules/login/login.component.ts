import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "cmail-loginpage",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  formLogin: FormGroup;

  constructor(private router: Router) {
    let emailInicial = "";
    let senhaInicial = "";

    const stateDaRotaAtual = this.router.getCurrentNavigation().extras.state;
    if (stateDaRotaAtual) {
      emailInicial = stateDaRotaAtual.email;
      senhaInicial = stateDaRotaAtual.senha;
    }

    this.formLogin = new FormGroup({
      email: new FormControl(emailInicial, [
        Validators.required,
        Validators.email
      ]),
      senha: new FormControl(senhaInicial, [Validators.required])
    });
  }

  logar() {
    if (this.formLogin.valid) {
      // Implememntando o login de verdade
      console.log("dispara o login do usuario", this.formLogin.value);
    }
  }
}
