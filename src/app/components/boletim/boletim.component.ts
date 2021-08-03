import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from 'src/app/models/aluno.model';
import { MessageService } from 'src/app/services/message.service';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.component.html',
  styleUrls: ['./boletim.component.css']
})
export class BoletimComponent implements OnInit {
  aluno: Aluno;

  primeirobimestre: Aluno[];
  segundobimestre: Aluno[];
  terceirobimestre: Aluno[];
  quartobimestre: Aluno[];

  mediaprimeirobimestre: number;
  mediasegundobimestre: number;
  mediaterceirobimestre: number;
  mediaquartobimestre: number;

  mediasporbimestre: Array<any>;

  mediafinal: any;
  totalfaltas: number = 0;
  presenca: number = 0;
  situacao: string = '';

  constructor(
    private pesquisa: PesquisaService,
    private route: ActivatedRoute,
    private msg: MessageService
  ) { }

  ngOnInit(): void {
    this.boletimEscolar();
  }

  boletimEscolar(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pesquisa.getAlunoById(id).subscribe(alunos => {
      this.aluno = alunos

      this.aluno.bimestres.filter((res: any) => {
        try {
          this.totalfaltas = this.totalfaltas + parseInt(res.faltas)

          this.presenca = parseInt(this.calculoFrequencia(this.totalfaltas).toFixed(2))
          const result = Array(res);

          const gradList = [
            res.n1,
            res.n2,
            res.n3,
            res.n4
          ]

          const media = parseFloat(this.getMediaBimestral(gradList).toFixed(2));
          this.mediaBimestral(media, result, res);

          if (this.presenca < 75 && this.mediafinal < 5) {
            this.situacao = 'Reprovado';
          } else if (this.mediafinal >= 5 && this.mediafinal < 6) {
            this.situacao = 'Recuperação';
          } else {
            this.situacao = 'Aprovado';
          }
        } catch (error) {
          this.msg.showFailMessage(error);
        }
      });
    });
  }

  public getMediaFinal(gradeList: any) {
    let items = gradeList.length
    let sum = 0
    for (let i = 0; i < items; i++) {
      sum += gradeList[i]
    }
    const mediafinal = sum / items
    return mediafinal
  }

  public getMediaBimestral(gradeList: any) {
    let items = gradeList.length
    let mediaBimestral = 0
    for (let i = 0; i < items; i++) {
      mediaBimestral += gradeList[i]
    }
    return mediaBimestral
  }

  public calculoFrequencia(freq: any) {
    let faltas = freq;
    let dias = 160;

    let result = dias - faltas;
    let n = result / dias;
    let a = n * 100;
    return a;
  }

  public mediaBimestral(media: number, result: any, res: any): void {
    switch (res.id) {
      case 1:
        this.primeirobimestre = result;
        this.mediaprimeirobimestre = media;
        break;
      case 2:
        this.segundobimestre = result;
        this.mediasegundobimestre = media;
        break;
      case 3:
        this.terceirobimestre = result;
        this.mediaterceirobimestre = media;
        break;
      case 4:
        this.quartobimestre = result;
        this.mediaquartobimestre = media;
        break;
      default:
        break;
    }

    this.mediasporbimestre = [
      this.mediaprimeirobimestre,
      this.mediasegundobimestre,
      this.mediaterceirobimestre,
      this.mediaquartobimestre
    ]

    this.mediafinal = this.getMediaFinal(this.mediasporbimestre)
  }

}
