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

  atualizar() {
    //inputs das faltas
    const f1 = parseInt((document.querySelector('#f1') as HTMLInputElement).value);
    const f2 = parseInt((document.querySelector('#f2') as HTMLInputElement).value);
    const f3 = parseInt((document.querySelector('#f3') as HTMLInputElement).value);
    const f4 = parseInt((document.querySelector('#f4') as HTMLInputElement).value);
    //nodelists com os elementos HTML - inputs das notas
    const pbn = document.querySelectorAll('.pbn');
    const sbn = document.querySelectorAll('.sbn');
    const tbn = document.querySelectorAll('.tbn');
    const qbn = document.querySelectorAll('.qbn');
    //armazenando a mensagem de erro em uma const para melhorar a legibilidade do codigo.
    const message = this.msg.showWarningMessage('A nota não pode ser maior do que o peso da atividade.')
    //convertendo NodeList em array
    const arrPbn = Array.from(pbn) //array com os inputs das notas do primeiro bimestre
    const arrSbn = Array.from(sbn) //array com os inputs das notas do segundo bimestre
    const arrTbn = Array.from(tbn) //array com os inputs das notas do terceiro bimestre
    const arrQbn = Array.from(qbn) //array com os inputs das notas do quarto bimestre
    // ira concatenar os arrays que contem os dados dos bimestres.
    const arrBimestres = arrPbn.concat(arrSbn, arrTbn, arrQbn)
    //iterando o array de bimestres para validar os dados.
    let salvar = true;
    arrBimestres.forEach(el => {
      debugger
      const nota = parseFloat((el as HTMLInputElement).value);
      const elementName = (el as HTMLInputElement).name;

      if (elementName == 'pbn1' && nota > 1.5 || elementName == 'pbn2' && nota > 2.5 || elementName == 'pbn3' && nota > 3 || elementName == 'pbn4' && nota > 3) {
        salvar = false;
        return message;
      } else if (elementName == 'sbn1' && nota > 1.5 || elementName == 'sbn2' && nota > 2.5 || elementName == 'sbn3' && nota > 3 || elementName == 'sbn4' && nota > 3) {
        salvar = false;
        return message;
      } else if (elementName == 'tbn1' && nota > 1.5 || elementName == 'tbn2' && nota > 2.5 || elementName == 'tbn3' && nota > 3 || elementName == 'tbn4' && nota > 3) {
        salvar = false;
        return message;
      } else if (elementName == 'qbn1' && nota > 1.5 || elementName == 'qbn2' && nota > 2.5 || elementName == 'qbn3' && nota > 3 || elementName == 'qbn4' && nota > 3) {
        salvar = false;
        return message;
      } else if (f1 > 40 || f2 > 40 || f3 > 40 || f4 > 40) {
        salvar = false;
        return this.msg.showWarningMessage('O número de faltas não pode ser maior do que 40.');
      }
    });

    if (salvar) {
      this.service.updateAluno(this.aluno).subscribe(() => {
        this.msg.showSuccessMessage(`Registro do aluno ${this.aluno.nome} atualizado com sucesso!`);
        // this.router.navigate(['/']);
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
      this.msg.showFailMessage(`Não foi possível exibir os registros, por favor, verifique se a API está rodando e tente novamente.`);
    });
  }
}
