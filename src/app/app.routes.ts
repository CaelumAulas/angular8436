import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./modules/login/login.component";
import { InboxComponent } from "./modules/inbox/inbox.component";
import { Page404Component } from "./modules/page404/page404.component";
import { NgModule } from "@angular/core";

const rotasDaAplicacao: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", redirectTo: "" },
  { path: "inbox", component: InboxComponent },
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
// --- login (sync)
// --- inbox (sync)
// --- cadastro (async === só baixa quando acessarem)
// ------- loadChildren: "src/app/modules/caminhoatéoarquivodoModule#ClasseDoModulo"
// -------- Depois do angular baixar,
// -------- ele procura um roteamento interno ===>
