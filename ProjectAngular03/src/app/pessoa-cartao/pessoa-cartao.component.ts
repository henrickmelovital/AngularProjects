import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pessoa-cartao',
  templateUrl: './pessoa-cartao.component.html',
  styleUrls: ['./pessoa-cartao.component.css']
})
export class PessoaCartaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('nome') pessoa: any;
}