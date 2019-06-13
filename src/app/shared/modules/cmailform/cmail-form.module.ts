import { NgModule } from "@angular/core";
import { CmailFormFieldDirective } from "./components/cmail-form-group/cmailFormField.directive";
import { CmailFormGroupComponent } from "./components/cmail-form-group/cmail-form-group.component";
import { CommonModule } from "@angular/common";

// Component e Diretiva
@NgModule({
  declarations: [CmailFormFieldDirective, CmailFormGroupComponent],
  imports: [CommonModule],
  exports: [CmailFormFieldDirective, CmailFormGroupComponent]
})
export class CmailFormModule {}
