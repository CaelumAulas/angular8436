import { Pipe, PipeTransform } from "@angular/core";
import { Email } from "../domain/Email";
@Pipe({ name: "filtraEmailPorBody" }) // Importa no app.module nas Declarations
export class FiltraEmailPorBody implements PipeTransform {
  transform(emails: Email[], criterioDoFiltro: string) {
    const criterioDoFiltroPadronizado = criterioDoFiltro.toUpperCase();
    return emails.filter(email => {
      const bodyPadronizado = email.body.toUpperCase();
      return bodyPadronizado.includes(criterioDoFiltroPadronizado);
    });
  }
}
