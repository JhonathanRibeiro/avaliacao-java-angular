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
    const FALTAS_PRIMEIRO_BIMETRE = parseInt((document.querySelector('#f1') as HTMLInputElement).value);
    const FALTAS_SEGUNDO_BIMETRE = parseInt((document.querySelector('#f2') as HTMLInputElement).value);
    const FALTAS_TERCEIRO_BIMETRE = parseInt((document.querySelector('#f3') as HTMLInputElement).value);
    const FALTAS_QUARTO_BIMETRE = parseInt((document.querySelector('#f4') as HTMLInputElement).value);
    //nodelists com os elementos HTML - inputs das notas
    const NOTAS_PRIMEIRO_BIMESTRE = document.querySelectorAll('.pbn');
    const NOTAS_SEGUNDO_BIMESTRE = document.querySelectorAll('.sbn');
    const NOTAS_TERCEIRO_BIMESTRE = document.querySelectorAll('.tbn');
    const NOTAS_QUARTO_BIMESTRE = document.querySelectorAll('.qbn');
    //armazenando a mensagem de erro em uma const para melhorar a legibilidade do codigo.
    const message = this.msg.showWarningMessage('A nota não pode ser maior do que o peso da atividade.')
    //convertendo NodeList em array
    const ARRAY_NOTAS_PRIMEIRO_BIMESTRE = Array.from(NOTAS_PRIMEIRO_BIMESTRE) //array com os inputs das notas do primeiro bimestre
    const ARRAY_NOTAS_SEGUNDO_BIMESTRE = Array.from(NOTAS_SEGUNDO_BIMESTRE) //array com os inputs das notas do segundo bimestre
    const ARRAY_NOTAS_TERCEIRO_BIMESTRE = Array.from(NOTAS_TERCEIRO_BIMESTRE) //array com os inputs das notas do terceiro bimestre
    const ARRAY_NOTAS_QUARTO_BIMESTRE = Array.from(NOTAS_QUARTO_BIMESTRE) //array com os inputs das notas do quarto bimestre
    // ira concatenar os arrays que contem os dados dos bimestres.
    const ARRAY_NOTAS_BIMESTRES = ARRAY_NOTAS_PRIMEIRO_BIMESTRE.concat(
      ARRAY_NOTAS_SEGUNDO_BIMESTRE,
      ARRAY_NOTAS_TERCEIRO_BIMESTRE,
      ARRAY_NOTAS_QUARTO_BIMESTRE)
    //iterando o array de bimestres para validar os dados.
    let salvar = true;

    ARRAY_NOTAS_BIMESTRES.forEach(el => {
      debugger
      const NOTA = parseFloat((el as HTMLInputElement).value);
      const NOME_ELEMENTO = (el as HTMLInputElement).name;

      if (NOME_ELEMENTO == 'pbn1' && NOTA > 1.5 || NOME_ELEMENTO == 'pbn2' && NOTA > 2.5 || NOME_ELEMENTO == 'pbn3' && NOTA > 3 || NOME_ELEMENTO == 'pbn4' && NOTA > 3) {
        salvar = false;
        return message;
      } else if (NOME_ELEMENTO == 'sbn1' && NOTA > 1.5 || NOME_ELEMENTO == 'sbn2' && NOTA > 2.5 || NOME_ELEMENTO == 'sbn3' && NOTA > 3 || NOME_ELEMENTO == 'sbn4' && NOTA > 3) {
        salvar = false;
        return message;
      } else if (NOME_ELEMENTO == 'tbn1' && NOTA > 1.5 || NOME_ELEMENTO == 'tbn2' && NOTA > 2.5 || NOME_ELEMENTO == 'tbn3' && NOTA > 3 || NOME_ELEMENTO == 'tbn4' && NOTA > 3) {
        salvar = false;
        return message;
      } else if (NOME_ELEMENTO == 'qbn1' && NOTA > 1.5 || NOME_ELEMENTO == 'qbn2' && NOTA > 2.5 || NOME_ELEMENTO == 'qbn3' && NOTA > 3 || NOME_ELEMENTO == 'qbn4' && NOTA > 3) {
        salvar = false;
        return message;
      } else if (
        FALTAS_PRIMEIRO_BIMETRE > 40 ||
        FALTAS_SEGUNDO_BIMETRE > 40 ||
        FALTAS_TERCEIRO_BIMETRE > 40 ||
        FALTAS_QUARTO_BIMETRE > 40
      ) {
      salvar = false;
      return this.msg.showWarningMessage('O número de faltas não pode ser maior do que 40.');
    }
  });

  if(salvar) {
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
