import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentacao',
  templateUrl: './documentacao.component.html',
  styleUrls: ['./documentacao.component.css']
})
export class DocumentacaoComponent implements OnInit {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
