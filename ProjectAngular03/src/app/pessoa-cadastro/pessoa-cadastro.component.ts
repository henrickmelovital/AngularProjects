import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css'],
})
export class PessoaCadastroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output('novaPessoa') pessoaAdicionada = new EventEmitter();

  pessoas = [
    { nome: 'Henrick', idade: 20 },
    { nome: 'Laisa', idade: 20 },
  ];

  adicionar(nome: string, idade: string) {
    const pessoa = {
      nome: nome,
      idade: parseInt(idade),
    };
    this.pessoaAdicionada.emit(pessoa);
  }
}
