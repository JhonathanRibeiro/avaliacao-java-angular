import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno.model';
import { Atividades } from 'src/app/models/atividade.model';
import { Bimestres } from 'src/app/models/bimestres.model';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  panelOpenState = false;
  selectedValue: string = '';
  aluno: Aluno = {
    nome: ''
  };
  bimestres: Bimestres[] = [
    {value: '0', viewValue: '1º Bimestre'},
    {value: '1', viewValue: '2º Bimestre'},
    {value: '2', viewValue: '3º Bimestre'},
    {value: '3', viewValue: '4º Bimestre'}
  ];
  
  atividades: Atividades[] = [
    {descricao: 'Participação em sala de aula', peso: 1.1},
    {descricao: 'Entrega das tarefas', peso: 1.1},
    {descricao: 'Trabalho bimestral', peso: 1.1},
    {descricao: 'Prova bimestral', peso: 1.1}
  ];

  constructor(
    private msg: MessageService,
    private service: CadastrosService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  atualizar(): void {
    this.service.postAluno(this.aluno).subscribe(()=>{
      this.msg.showMessage('Registro atualizado com sucesso!');

      this.route.navigate(['/']);
    })
  }

}
