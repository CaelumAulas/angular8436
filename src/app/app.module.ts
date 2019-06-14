import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { ModuloDeRoteamento } from "./app.routes";
import { InboxComponent } from "./modules/inbox/inbox.component";
import { Page404Component } from "./modules/page404/page404.component";
import { TituloComponent } from "./components/titulo/titulo.component";
import { HttpClientModule } from "@angular/common/http";
import { CmailFormModule } from "./shared/modules/cmailform/cmail-form.module";
import { AuthBasicGuard } from "./guards/auth-basic.guard";
import { EmailService } from "./modules/inbox/email.service";

// Conjunto de componentes/lógicas
@NgModule({
  declarations: [
    // Componentes, Diretivas
    AppComponent,
    HeaderComponent,
    InboxComponent,
    Page404Component,
    TituloComponent
  ],
  imports: [
    // Módulos da aplicação ou de libs
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, //
    HttpClientModule,
    CmailFormModule,
    ModuloDeRoteamento
  ],
  providers: [AuthBasicGuard, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule {}
