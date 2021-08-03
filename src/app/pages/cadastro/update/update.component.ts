import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno.model';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { MessageService } from 'src/app/services/message.service';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {
  aluno: Aluno;
  primeirobimestre: Aluno[];
  segundobimestre: Aluno[];
  terceirobimestre: Aluno[];
  quartobimestre: Aluno[];

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
    const f1 = parseInt((document.querySelector('#f1') as HTMLInputElement).value);
    const f2 = parseInt((document.querySelector('#f2') as HTMLInputElement).value);
    const f3 = parseInt((document.querySelector('#f3') as HTMLInputElement).value);
    const f4 = parseInt((document.querySelector('#f4') as HTMLInputElement).value);
    if (f1 > 40 || f2 > 40 || f3 > 40 || f4 > 40) {
      this.msg.showWarningMessage('O número de faltas não pode ser maior do que 40.');
    } else {
      this.service.updateAluno(this.aluno).subscribe(() => {
        this.msg.showSuccessMessage(`Registro do aluno ${this.aluno.nome} atualizado com sucesso!`);
        this.router.navigate(['/']);
      });
    }
  }

  listaALuno(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pesquisa.getAlunoById(id).subscribe(alunos => {
      this.aluno = alunos

      this.aluno.bimestres.filter((res: any) => {
        switch (res.id) {
          case 1:
            this.primeirobimestre = Array(res)
            break;
          case 2:
            this.segundobimestre = Array(res)
            break;
          case 3:
            this.terceirobimestre = Array(res)
            break;
          case 4:
            this.quartobimestre = Array(res)
            break;
          default:
            break;
        }
      });
    }, err => {
      this.msg.showFailMessage(`Não foi possível exibir os registros, por favor, verifique se a API está rodando e tente novamente.}`);
    });
  }
}
