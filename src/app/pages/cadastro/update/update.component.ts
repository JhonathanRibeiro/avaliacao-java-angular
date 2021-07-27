import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Atividades } from 'src/app/models/atividade.model';
import { Bimestres } from 'src/app/models/bimestres.model';
import { Boletim } from 'src/app/models/boletim.model';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  panelOpenState = false;
  
  faltas: number = 0;
  nota1:  number = 0;
  nota2:  number = 0;
  nota3:  number = 0;
  nota4:  number = 0;

  bimestres: Bimestres[] = [
    {value: '1', viewValue: '1º Bimestre'},
    {value: '2', viewValue: '2º Bimestre'},
    {value: '3', viewValue: '3º Bimestre'},
    {value: '4', viewValue: '4º Bimestre'}
  ];
  
  atividades: Atividades[] = [
    {descricao: 'Participação em sala de aula', peso: 1.5},
    {descricao: 'Entrega das tarefas', peso: 2.5},
    {descricao: 'Trabalho bimestral', peso: 3.0},
    {descricao: 'Prova bimestral', peso: 3.0}
  ];

  boletim: Boletim = {
      aluno: '',
      notas: [
        this.nota1,
        this.nota2,
        this.nota3,
        this.nota4
      ],
      faltas: 0,
      bimestre: ''
    }

  constructor(
    private msg: MessageService,
    private service: CadastrosService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  atualizar(): void {
    console.log(`Boletim: ${JSON.stringify(this.boletim)}`)
    // this.service.postAluno(this.boletim).subscribe(()=>{
    //   this.msg.showMessage('Registro atualizado com sucesso!');

    //   this.route.navigate(['/']);
    // })
  }
}
