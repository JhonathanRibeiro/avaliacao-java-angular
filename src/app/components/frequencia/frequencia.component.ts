import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from 'src/app/models/aluno.model';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-frequencia',
  templateUrl: './frequencia.component.html',
  styleUrls: ['./frequencia.component.css']
})
export class FrequenciaComponent implements OnInit {
  panelOpenState = false;
  aluno: Aluno;
  totalfaltas: number = 0;
  presenca: number = 0;

  constructor(
    private service: PesquisaService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getFrequencia();
  }

  public getFrequencia(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getAlunoById(id).subscribe((el: Aluno[]) => {
      this.aluno = el
      this.aluno.bimestres.filter((res: any) => {
         this.totalfaltas = this.totalfaltas + parseInt(res.faltas)
         console.log(this.totalfaltas);

        this.presenca = parseInt(this.calculoFrequencia(this.totalfaltas).toFixed(2))
      });

      // console.log(this.somaFaltas([1,2,3,4]))
      //   if (presenca < 75 && media < 5) return el.situacao = 'Reprovado';
      //   if (media >= 5 && media < 6) return el.situacao = 'Recuperação';
      //   return el.situacao = 'Aprovado';
    });
  }

  public somaFaltas(gradeList: any) {
    let items = gradeList.length
    let sum = 0
    for (let i = 0; i < items; i++) {
      sum += gradeList[i]
    }
    return sum
  }

  public calculoFrequencia(freq: any) {
    let faltas = freq;
    let dias = 160;

    let result = dias - faltas;
    let n = result / dias;
    let a = n * 100;
    return a;
  }
}
