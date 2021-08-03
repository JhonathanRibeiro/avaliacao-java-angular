import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from 'src/app/models/aluno.model';
import { MessageService } from 'src/app/services/message.service';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-identificacao-aluno',
  templateUrl: './identificacao-aluno.component.html',
  styleUrls: ['./identificacao-aluno.component.css']
})
export class IdentificacaoAlunoComponent implements OnInit {
  aluno: Aluno;

  constructor(
    private service: PesquisaService,
    private route: ActivatedRoute,
    private msg: MessageService
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getAlunoById(id).subscribe(alunos => {
      this.aluno = alunos;
    });
  }

}
