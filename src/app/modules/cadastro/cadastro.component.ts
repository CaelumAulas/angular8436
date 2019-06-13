import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

function marcaCamposDoFormComoTouched(form: FormGroup) {
  const controlKeys = Object.keys(form.controls);
  controlKeys.forEach(controlKeyAtual => {
    form.get(controlKeyAtual).markAsTouched({ onlySelf: true });
  });
}

@Component({
  selector: "cmail-cadastropage",
  templateUrl: "./cadastro.component.html"
})
export class CadastroComponent {
  formCadastro: FormGroup = new FormGroup({
    nome: new FormControl("", [Validators.required, Validators.minLength(3)]),
    usuario: new FormControl("", {
      asyncValidators: [this.validaUsuario.bind(this)],
      validators: [Validators.required, Validators.maxLength(20)]
    }),
    // - Criar o campo no HMTL e atualizar a função que envia pro server
    // https://regex101.com/r/pCMokg/2
    telefone: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(9),
      Validators.pattern("[0-9]{8}([0-9])?")
    ])
  });

  validaUsuario(campo: FormControl) {
    return this.httpClient.get("http://localhost:3200/users").pipe(
      map((respostaDoServer: any) => {
        const usuariosFiltrados = respostaDoServer.users.filter(user => {
          return user.username === campo.value;
        });
        const usernameEInvalido = usuariosFiltrados.length !== 0;

        return usernameEInvalido ? { usernameEmUso: true } : null;
      })
    );
  }

  constructor(private httpClient: HttpClient, private roteamento: Router) {}

  handleCadastroDeUsuario() {
    if (this.formCadastro.invalid) {
      marcaCamposDoFormComoTouched(this.formCadastro);
      return;
    }

    this.httpClient
      .post("http://localhost:3200/users", {
        name: this.formCadastro.get("nome").value,
        username: this.formCadastro.value.usuario,
        phone: this.formCadastro.value.telefone
      })
      .subscribe(
        (response: any) => {
          console.log("Request enviado", response);
          // O ideal, seria colocar um elemento visual na tela
          alert("Cadastro concluido com sucessinhos!");
          // dispara um loader na tela
          setTimeout(() => {
            // cancela o loader
            this.roteamento.navigate(["login"], {
              state: { email: response.email, senha: response.password }
            });
          }, 500);
        },
        err => {
          console.log(err);
        }
      );

    // /users GET (pega todosx)
    // /users POST (cria o usuario baseado no conteudo do body)
    // /users/id GET (pega o usuario por id)
    // /users/id DELETE (remove o usuario por id)

    // segue mandando os dados para o server
  }
}

// Observable | RxJS
// .pipe()
// // .retry()
// // .map()
// // .debounce()
// // .timeout()
// .subscribe()
// .cancel()
// Promise
// .then()
// .catch()

// fetch("http://localhost:3200/users")
// .then(respostaDoServer => {
//   if (respostaDoServer.ok) return respostaDoServer.json();
//   throw new Error("Erro ao fazer o request");
// })
// .then(respostaConvertidaEmObjeto => {
//   const usuariosFiltrados = respostaConvertidaEmObjeto.users.filter(
//     user => {
//       return user.username === usuarioDoInput;
//     }
//   );

//   const isAlreadyInUse = usuariosFiltrados.length !== 0;
//   if (isAlreadyInUse) {
//     console.log("Esse usuário já existe");
//   }
// })
// .catch(() => {
//   console.log("deu merda");
// });
