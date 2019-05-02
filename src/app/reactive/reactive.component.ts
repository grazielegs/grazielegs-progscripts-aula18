import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';
import { Aluno, cursos } from '../aluno';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  private cursos: string[];
  private minData = new Date(1900, 0, 1);
  private maxData = new Date();

  /* lista de todas as regras a serem cumpridas pelos campos do form antes de ser liberado para submit */
  private controle: FormGroup;

  constructor(private servico: ServicoService) { }

  ngOnInit() {
    this.cursos = cursos;
    this.controle = new FormGroup({
      nome: new FormControl('', [Validators.pattern("^[a-zA-Z ]*$")]),
      mail: new FormControl('', [Validators.email]),
      nascimento: new FormControl('', []),
      curso: new FormControl('', [])
    });
  }


  salvar(): boolean {
    /* copia do formulário para o objeto Aluno */
    let aluno: Aluno = new Aluno();
    aluno.nome = this.controle.value.nome;
    aluno.mail = this.controle.value.mail;
    aluno.nascimento = this.controle.value.nascimento;
    aluno.curso = this.controle.value.curso;
    this.servico.add(aluno);
    this.controle.reset();
    return false;
  }
}