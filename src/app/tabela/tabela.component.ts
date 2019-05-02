import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  private colunas: string[] = ['id', 'nome', 'mail', 'nascimento', 'curso'];

  constructor(private servico: ServicoService) { }
  ngOnInit() { }
}