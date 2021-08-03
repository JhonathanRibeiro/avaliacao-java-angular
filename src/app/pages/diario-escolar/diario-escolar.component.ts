import { PesquisaService } from './../../services/pesquisa.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-diario-escolar',
  templateUrl: './diario-escolar.component.html',
  styleUrls: ['./diario-escolar.component.css']
})
export class DiarioEscolarComponent implements OnInit {
  alunos: Array<any> = new Array;

  constructor(
    private pesquisa: PesquisaService,
    private msg: MessageService
  ) { }

  ngOnInit(): void {
    this.listaAlunos();
  }

  listaAlunos() {
      this.pesquisa.getAlunos().subscribe(alunos => {
        this.alunos = alunos;
      }, err =>{
        this.msg.showFailMessage(`A API pode não ter sido inicializada, verifique e tente novamente.`)
      });
     
  }
}
