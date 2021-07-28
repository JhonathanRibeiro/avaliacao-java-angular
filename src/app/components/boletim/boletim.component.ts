import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Boletim } from 'src/app/models/boletim.model';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.component.html',
  styleUrls: ['./boletim.component.css']
})
export class BoletimComponent implements OnInit {
  panelOpenState = true;
  boletim: Boletim;

  constructor(
    private pesquisa: PesquisaService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pesquisa.getBoletim(id).subscribe(boletim =>{
      this.boletim = boletim;
      console.log(boletim)
    });

    this.pesquisa.getBoletins(id).subscribe(boletins=>{
      console.log('boletins', boletins);
    })
  }

}
