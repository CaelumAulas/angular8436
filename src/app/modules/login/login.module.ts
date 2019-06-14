import { NgModule } from "@angular/core";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { CommonModule } from "@angular/common";
import { CmailFormModule } from "src/app/shared/modules/cmailform/cmail-form.module";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginService } from "./login.service";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    // Sempre relativo a modulos
    CommonModule,
    ReactiveFormsModule,
    CmailFormModule,
    LoginRoutingModule
  ],
  exports: [LoginComponent],
  providers: [
    // Classes suas, que você quer receber via injeção de dependencia
    LoginService
  ]
})
export class LoginModule {}
