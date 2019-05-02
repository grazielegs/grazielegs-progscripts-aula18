import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';
import { Aluno, cursos } from '../aluno';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  private cursos: string[];
  private aluno: Aluno = new Aluno();
  private minData = new Date(1900, 0, 1);
  private maxData = new Date();
  constructor(private servico: ServicoService) { }

  ngOnInit() {
    this.cursos = cursos;
  }

  salvar(): void {
    this.servico.add(this.aluno);
    this.aluno = new Aluno();
  }
}