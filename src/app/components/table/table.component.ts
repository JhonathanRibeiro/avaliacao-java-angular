import { Aluno } from 'src/app/models/aluno.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableDataSource } from './table-datasource';
import { PesquisaService } from 'src/app/services/pesquisa.service';
import { Boletim } from 'src/app/models/boletim.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Aluno>;

  alunos: Boletim[] = [];
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
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}