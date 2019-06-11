import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "cmail-cadastropage",
  templateUrl: "./cadastro.component.html"
})
export class CadastroComponent {
  formCadastro: FormGroup = new FormGroup({
    nome: new FormControl("", [Validators.required]),
    usuario: new FormControl("", [Validators.required])
  });

  handleCadastroDeUsuario() {
    console.log(this.formCadastro.get("nome"));
    console.log(this.formCadastro.get("usuario"));
  }
}
