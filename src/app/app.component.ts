import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  // templateUrl: Carrega um arquivo
  // template: recebe direto o HTML que vai pra página
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
