import { Component, Input, OnInit } from '@angular/core';
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
  aluno: Aluno;
  primeirobimestre: Aluno[];
  segundobimestre: Aluno[];
  terceirobimestre: Aluno[];
  quartobimestre: Aluno[];

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
    this.listaALuno();
  }

  atualizar(): void {
    this.service.updateAluno(this.aluno).subscribe(() => {

      localStorage.setItem("item", JSON.stringify(this.aluno))
      this.msg.showMessage(`Registro do aluno ${this.aluno.nome} atualizado com sucesso!`);
      // this.router.navigate(['/']);
    });
  }

  listaALuno(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pesquisa.getAlunoById(id).subscribe(alunos => {
      this.aluno = alunos

      this.aluno.bimestres.filter((res: any) => {
        switch (res.id) {
          case 1:
            this.primeirobimestre = Array(res)
            console.log(this.primeirobimestre)
            break;
          case 2:
            this.segundobimestre = Array(res)
            console.log(this.segundobimestre)
            break;
          case 3:
            this.terceirobimestre = Array(res)
            console.log(this.terceirobimestre)
            break;
          case 4:
            this.quartobimestre = Array(res)
            console.log(this.quartobimestre)
            break;
          default:
            break;
        }
      })
    });
  }
}
