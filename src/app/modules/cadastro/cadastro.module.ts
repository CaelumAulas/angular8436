// 1 - Comenta o HTML da parte de login
// 2 - Cria o cadastro.module.ts dentro da pasta app/modules/cadastro
// 3 - Cria o conteúdo do arquivo, exporta a classe e importa no app.module.ts
// 4 - Remove o CmailFormGroupComponent e o CmailFormFieldDirective do app.module.ts
import { NgModule } from "@angular/core";
import { CadastroComponent } from "./cadastro.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CadastroRoutingModule } from "./cadastro-routing.module";
import { CmailFormModule } from "src/app/shared/modules/cmailform/cmail-form.module";

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CmailFormModule,
    CadastroRoutingModule
  ],
  exports: [CadastroComponent]
})
export class CadastroModule {}
