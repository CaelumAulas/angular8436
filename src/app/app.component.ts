import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cmail - O Email mais showzao';

  isNewEmailFormOpen = false;

  toggleNewEmailForm() {
    this.isNewEmailFormOpen = !this.isNewEmailFormOpen;
  }
}
