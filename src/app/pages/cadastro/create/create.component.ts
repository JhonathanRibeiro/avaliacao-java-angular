import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno.model';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  aluno: Aluno = {
    nome: ''
  };

    constructor(
      private msg: MessageService,
      private service: CadastrosService,
      private route: Router
      ) { }

  ngOnInit(): void {
  }

  cadastraAluno(): void {
    this.service.postAluno(this.aluno).subscribe(()=>{
      this.msg.showMessage('Aluno matriculado com sucesso!');

      this.route.navigate(['/']);
    })
  }

}
