import { PesquisaService } from './../../services/pesquisa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diario-escolar',
  templateUrl: './diario-escolar.component.html',
  styleUrls: ['./diario-escolar.component.css']
})
export class DiarioEscolarComponent implements OnInit{
  alunos: Array<any> = new Array;

  constructor(
    private pesquisa: PesquisaService,
    ) { }

    ngOnInit(): void {
      this.listaAlunos()
    }

 listaAlunos() {
  this.pesquisa.getAlunos().subscribe(alunos =>{
    this.alunos = alunos;
  });
 }
}
