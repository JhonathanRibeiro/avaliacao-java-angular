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
    this.service.updateAluno(this.aluno).subscribe(() => {
      this.msg.showMessage(`Registro do aluno ${this.aluno.nome} atualizado com sucesso!`);
      this.router.navigate(['/']);
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
    });
  }

  public validator(): void {
    const inputs = Array.from(document.querySelectorAll('.input'));
    const arrayInputs = [...inputs];

    arrayInputs.filter(res => {
      console.log(`Resultados: ${res}`)
    });
  }

}
