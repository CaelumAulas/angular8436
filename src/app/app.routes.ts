import { Routes, RouterModule } from "@angular/router";
import { CadastroComponent } from "./modules/cadastro/cadastro.component";
import { LoginComponent } from "./modules/login/login.component";
import { InboxComponent } from "./modules/inbox/inbox.component";
import { Page404Component } from "./modules/page404/page404.component";

const rotasDaAplicacao: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", redirectTo: "" },
  { path: "inbox", component: InboxComponent },
  { path: "cadastro", component: CadastroComponent },
  // 2 - Criar a página 404
  { path: "**", component: Page404Component }
];
export const ModuloDeRoteamento = RouterModule.forRoot(rotasDaAplicacao);
