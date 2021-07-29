import { Aluno } from 'src/app/models/aluno.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { TableDataSource } from './table-datasource';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatTable) table!: MatTable<Aluno>;

  alunos: Aluno[] = [];
  dataSource: TableDataSource;
  displayedColumns = ['id', 'nome', 'matricula','status','acoes'];

  constructor(private lista: PesquisaService) {
    this.dataSource = new TableDataSource();
  }

  ngOnInit(): void {
    this.lista.getAlunos().subscribe(alunos=>{
      this.alunos = alunos;
    });
  }

  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
  }

}