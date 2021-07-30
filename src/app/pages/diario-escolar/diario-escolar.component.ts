import { PesquisaService } from './../../services/pesquisa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diario-escolar',
  templateUrl: './diario-escolar.component.html',
  styleUrls: ['./diario-escolar.component.css']
})
export class DiarioEscolarComponent implements OnInit {
  alunos: Array<any> = new Array;

  constructor(
    private pesquisa: PesquisaService,
  ) { }

  ngOnInit(): void {
    this.removeClasseCss();
    this.listaAlunos();
  }

  listaAlunos() {
    this.pesquisa.getAlunos().subscribe(alunos => {
      this.alunos = alunos;
    });
  }
  
  removeClasseCss(): void {
    /**
     * Remove class css do material-ui para alinhar os ícones
     * dos botões de ações.
     */
    document.querySelectorAll('.mat-button-wrapper')
      .forEach((item) => { item.classList.remove('mat-button-wrapper') })
  }
}
