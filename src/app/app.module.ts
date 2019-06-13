import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { ModuloDeRoteamento } from "./app.routes";
// import { CadastroComponent } from "./modules/cadastro/cadastro.component";
import { LoginComponent } from "./modules/login/login.component";
import { InboxComponent } from "./modules/inbox/inbox.component";
import { Page404Component } from "./modules/page404/page404.component";
import { TituloComponent } from "./components/titulo/titulo.component";
// import { CmailFormGroupComponent } from "./components/cmail-form-group/cmail-form-group.component";
// import { CmailFormFieldDirective } from "./components/cmail-form-group/cmailFormField.directive";
import { HttpClientModule } from "@angular/common/http";
import { CadastroModule } from "./modules/cadastro/cadastro.module";

// Conjunto de componentes/lógicas
@NgModule({
  declarations: [
    // Componentes, Diretivas
    AppComponent,
    HeaderComponent,
    LoginComponent,
    InboxComponent,
    Page404Component,
    TituloComponent
  ],
  imports: [
    // Módulos da aplicação ou de libs
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // CadastroModule,
    ModuloDeRoteamento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
