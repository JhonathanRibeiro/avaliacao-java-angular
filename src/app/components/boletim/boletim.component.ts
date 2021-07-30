import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from 'src/app/models/aluno.model';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.component.html',
  styleUrls: ['./boletim.component.css']
})
export class BoletimComponent implements OnInit {
  panelOpenState = false;
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

  constructor(
    private pesquisa: PesquisaService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
   this.boletimEscolar();
  }

  boletimEscolar(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pesquisa.getAlunoById(id).subscribe(alunos =>{
      this.aluno = alunos

      this.aluno.bimestres.filter((res: any) => {
        const result = Array(res);

        const gradList = [
          res.n1,
          res.n2,
          res.n3,
          res.n4
        ]
        
        const media = parseFloat(this.getMediaBimestral(gradList).toFixed(2))

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

      })
    });
  }

  public getMediaFinal(gradeList: any) {
    let items = gradeList.length
    let sum = 0
    for (let i = 0; i < items; i++) {
      sum += gradeList[i]
    }
    const result = sum / items
    return result
  }

  public getMediaBimestral(gradeList: any) {
    let items = gradeList.length
    let sum = 0
    for (let i = 0; i < items; i++) {
      sum += gradeList[i]
    }
    return sum
  }
}
