import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno.model';
import { Atividades } from 'src/app/models/atividade.model';
import { Bimestres } from 'src/app/models/bimestres.model';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { MessageService } from 'src/app/services/message.service';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  panelOpenState = false;
  boletim: Aluno;

  bimestres: Bimestres[] = [
    { value: 1, viewValue: '1º Bimestre' },
    { value: 2, viewValue: '2º Bimestre' },
    { value: 3, viewValue: '3º Bimestre' },
    { value: 4, viewValue: '4º Bimestre' }
  ];

  atividades: Atividades[] = [
    { descricao: 'Participação em sala de aula', peso: 1.5 },
    { descricao: 'Entrega das tarefas', peso: 2.5 },
    { descricao: 'Trabalho bimestral', peso: 3.0 },
    { descricao: 'Prova bimestral', peso: 3.0 }
  ];

  constructor(
    private msg: MessageService,
    private service: CadastrosService,
    private pesquisa: PesquisaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pesquisa.getAlunoById(id).subscribe(alunos => {
     this.boletim = alunos
    });
  }

  atualizar(): void {
    this.service.updateAluno(this.boletim).subscribe(() => {
      this.msg.showMessage(`Registro do aluno ${this.boletim.aluno} atualizado com sucesso!`);
      this.router.navigate(['/']);
    });
  }
}
