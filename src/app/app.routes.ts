import { Routes, RouterModule } from "@angular/router";
import { InboxComponent } from "./modules/inbox/inbox.component";
import { Page404Component } from "./modules/page404/page404.component";
import { NgModule } from "@angular/core";
import { AuthBasicGuard } from "./guards/auth-basic.guard";
// 1 - altera o app routes, fazendo o load children
// 2 - cria o login.module, e remove do app.module tudo o que ele importa
// 3 - Criar o login-routing.module se baseando no outro que já criamos

const rotasDaAplicacao: Routes = [
  { path: "inbox", component: InboxComponent, canActivate: [AuthBasicGuard] },
  { path: "login", redirectTo: "" },
  {
    path: "",
    loadChildren: "src/app/modules/login/login.module#LoginModule"
  },
  {
    path: "cadastro",
    loadChildren: "src/app/modules/cadastro/cadastro.module#CadastroModule"
  },
  { path: "**", component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(rotasDaAplicacao)], // importa e configura
  exports: [RouterModule] // exporta configurado
})
export class ModuloDeRoteamento {}

// "Cada página, deveria ser um módulo seu"
// 1 - app.module.ts
// 2 - app.routes.ts
// --- inbox (sync)
// --- cadastro (async === só baixa quando acessarem)
// ------- loadChildren: "src/app/modules/caminhoatéoarquivodoModule#ClasseDoModulo"
// -------- Depois do angular baixar,
// -------- ele procura um roteamento interno ===>
