import { Component, Input } from "@angular/core";
import { HeaderService } from "./header.service";
// Ctrl + Barra de espaço: Sugestões do VsCode pra vc
@Component({
  selector: "cmail-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css", "./header-search.css"]
})
export class HeaderComponent {
  @Input() title = "";
  constructor(private headerService: HeaderService) {}

  isMenuOpen = false;

  handleMenuClick() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  filtrandoDadosDaTela(valor: string) {
    this.headerService.atualizaOsDadosDoFiltroDaBusca(valor);
  }
}
