import { PesquisaService } from './../../services/pesquisa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno.model';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-diario-escolar',
  templateUrl: './diario-escolar.component.html',
  styleUrls: ['./diario-escolar.component.css']
})
export class DiarioEscolarComponent implements OnInit{

  alunos: Array<any> = new Array;

  aluno: Aluno = {
    nome: 'Aluno teste'
  }

  constructor(
    private router: Router,
    private service: CadastrosService,
    private pesquisa: PesquisaService,
    private msg: MessageService
    ) { }

    ngOnInit(): void {
      this.listaAlunos()
    }

 cadastraAluno() {
  this.service.postAluno(this.aluno).subscribe(()=>{
    console.log('deu certo')
    this.msg.showMessage('Aluno cadastrado com sucesso!');
    this.router.navigate(['/']);
  });
 }

 listaAlunos() {
  this.pesquisa.getAlunos().subscribe(alunos =>{
    this.alunos = alunos;
    console.log(alunos)
  });
 }

}
