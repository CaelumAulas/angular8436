import { Directive, ElementRef } from "@angular/core";
@Directive({
  selector: "[cmailFormField]"
})
export class CmailFormFieldDirective {
  constructor(campoEmHTML: ElementRef) {
    const campo = campoEmHTML.nativeElement;

    const name = campo.getAttribute("name");

    campo.setAttribute("id", name);
    campo.classList.add("mdl-textfield__input");
  }
}
