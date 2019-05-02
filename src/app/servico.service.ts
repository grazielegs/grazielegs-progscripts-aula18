import { Injectable } from '@angular/core';
import { Aluno } from './aluno';
import { MatTableDataSource } from '@angular/material';
@Injectable()
export class ServicoService {
  private dataSource: MatTableDataSource<Aluno>;
  public lista: Aluno[] = [];
  constructor() {
    this.refresh();
  }

  add(aluno: Aluno): void {
    this.lista.push(aluno);
    this.refresh();
  }

  refresh(): void {
    this.dataSource = new MatTableDataSource<Aluno>(this.lista);
  }
}