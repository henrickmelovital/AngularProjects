import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Diretivas';

  pessoas = [
    { nome: 'Henrick', idade: 20 },
    { nome: 'Laisa', idade: 20 },
  ];

  onAdicionarPessoa(pessoa: any) {
    this.pessoas = [pessoa, ...this.pessoas];
  }
}
